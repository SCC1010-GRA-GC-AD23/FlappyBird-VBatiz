let imagenFondo
let imagenInicio
let imagenPersonaje
let x = 0
let posY = 100
let velY = 3
let estado = 0


function preload() {
  // put preload code here
  imagenFondo = loadImage('./images/fondojuego.png')
  imagenInicio = loadImage('./images/fondoinicio.png')
  imagenPersonaje = loadImage('./images/bird.png')
}

function setup() {
  // put setup code here
  createCanvas(1200,800)
}

function draw() {
  
  if (estado === 1) {
    // put drawing code here
    background(255)
    //rect(100,100,200,200)
    image(imagenFondo,x,0)
    image(imagenFondo,x+imagenFondo.width,0)
    x = x - 5

    //Moviendo al personaje
    velY = velY + 1
    posY = posY + velY

    //Revisando si el personaje se sale de la pantalla
    if (posY > height || posY < 0) {
      estado = 0
    }

    if (x < -imagenFondo.width) {
      x = 0
    }

    textSize(34)
    //text("👻",300,posY)
    image(imagenPersonaje,300,posY, 50,50)


  } else { //Significa que estamos en la pantalla de inicio
    background(0)
    image(imagenInicio,0,0)
  }
}


function mousePressed() {
  if (estado === 0) {
    estado = 1
    x = 0
    velY = 3
    posY = 50
  } else {
    velY = -15
  }
}