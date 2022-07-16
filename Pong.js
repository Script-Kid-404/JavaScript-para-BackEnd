// Jogos Clássicos: Pong com JavaScript //
   // 2 - Iniciando no JavaScript //

//Variáveis da bolinha:
let xBolinha = 300;
let yBolinha = 200;
let D = 15;
let r = D / 2;
//Variáveis da velocidade da bolinha
let velxBolinha = 5;
let velyBolinha = 5;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha()
  movimentaBolinha()
  colisaoBolinha()
  
  function mostraBolinha(){
    circle(xBolinha,yBolinha,D);
  }
  
  function movimentaBolinha(){
    xBolinha += velxBolinha;
    yBolinha += velyBolinha;
  }
  
  function colisaoBolinha(){
    if (xBolinha + r > width || xBolinha - r < 0){
    velxBolinha *= -1;
  }
  if (yBolinha + r > height || yBolinha - r < 0){
    velyBolinha *= -1;
  }
  }
  
}