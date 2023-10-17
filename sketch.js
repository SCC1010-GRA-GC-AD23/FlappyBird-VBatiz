let imagenFondo
let x = 0
let posY = 100
let velY = 3

function preload() {
  // put preload code here
  imagenFondo = loadImage('./images/fondojuego.png')
}

function setup() {
  // put setup code here
  createCanvas(1200,800)
}

function draw() {
  // put drawing code here
  background(255)
  //rect(100,100,200,200)
  image(imagenFondo,x,0)
  image(imagenFondo,x+imagenFondo.width,0)
  x = x - 5

  //Moviendo al personaje
  velY = velY + 1
  posY = posY + velY


  if (x < -imagenFondo.width) {
    x = 0
  }

  textSize(34)
  text("👻",300,posY)

}


function mouseClicked() {
  velY = -15
}