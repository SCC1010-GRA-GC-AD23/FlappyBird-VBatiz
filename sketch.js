let imagenFondo
let imagenInicio
let imagenPersonaje
let imagenPared
let wallX = [600, 900]
let wallY = [400, 600]
let x = 0
let posY = 100
let velY = 3
let estado = 0
let puntaje = 0
let record = 0
let recordAnterior = 0
let musicaRecord
let musicaFondo


function preload() {
  // put preload code here
  imagenFondo = loadImage('./images/fondojuego.png')
  imagenInicio = loadImage('./images/fondoinicio.png')
  imagenPersonaje = loadImage('./images/bird.png')
  imagenPared = loadImage('./images/pared.png')
  musicaRecord = loadSound('./sounds/aplauso.wav')
  musicaFondo = loadSound('./sounds/musicafondo.mp3')
}

function setup() {
  // put setup code here
  createCanvas(1200,800)
  textSize(34)
}

function draw() {
  
  if (estado === 1) {
    // put drawing code here
    background(255)
    //rect(100,100,200,200)
    imageMode(CORNER)
    image(imagenFondo,x,0)
    image(imagenFondo,x+imagenFondo.width,0)
    x = x - 5

    //Moviendo al personaje
    velY = velY + 1
    posY = posY + velY

    for (let i=0; i < wallX.length; i++) {
      imageMode(CENTER)
      image(imagenPared, wallX[i], wallY[i]-500)
      image(imagenPared, wallX[i], wallY[i]+500)

      if (wallX[i] < 0) {
        wallX[i] = width
        wallY[i] = random(200, 600)
      }
      
      if (wallX[i] ===300) {
        puntaje = puntaje + 1
        record = max(puntaje, record)
      }
    
      wallX[i] = wallX[i] - 5

      //Revisando si el personaje ha colisionado con una pared
      //Revisando si el personaje se sale de la pantalla
      //o si ha colisionado con una pared
      if (posY > height || posY < 0 || (abs(wallX[i]-300) < 60 
          && abs(posY - wallY[i]) > 100) ) {
        estado = 0
        musicaFondo.stop()
        cursor()
      }
    }

    
    if (x < -imagenFondo.width) {
      x = 0
    }

    //text("👻",300,posY)
    image(imagenPersonaje,300,posY, 50,50)
    text("Puntaje: " + puntaje, width/2-60, 50)


  } else { //Significa que estamos en la pantalla de inicio
    background(0)
    imageMode(CORNER)
    image(imagenInicio,0,0)
    
    text("Record: " + record, 60, 450)

    if (recordAnterior != record) {
      if (!musicaRecord.isPlaying()) {
        musicaRecord.play()
      }
     
    }

  }
}

function mousePressed() {
  if (estado === 0) {
    estado = 1
    x = 0
    velY = 3
    posY = 50
    wallX = [600, 900]
    wallY = [400, 600]
    puntaje = 0
    recordAnterior = record
    if (musicaRecord.isPlaying()) {
      musicaRecord.stop()
    }
    //Loop hace que cuando acabe la musica, se vuelva a reproducir
    musicaFondo.loop()
    noCursor()

  } else {
    velY = -15
  }
}

function touchStarted() {
  if (estado === 0) {
    estado = 1
    x = 0
    velY = 3
    posY = 50
    wallX = [600, 900]
    wallY = [400, 600]
    puntaje = 0
    recordAnterior = record
    if (musicaRecord.isPlaying()) {
      musicaRecord.stop()
    }
    //Loop hace que cuando acabe la musica, se vuelva a reproducir
    musicaFondo.loop()
    noCursor()

  } else {
    velY = -15
  }
}