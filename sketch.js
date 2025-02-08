let palavra;


function setup() {
  createCanvas(500, 500);
  palavra=palavraAleatoria();
  
}

function palavraAleatoria(){
    let palavras=["Washington","Fernandes","Barros"];
    return random(palavras);
}

function palavraParcial(minimo,maximo){
  let quantidade=map(mouseX,minimo,maximo,1,palavra.length);
  let parcial=palavra.substring(0,quantidade);
  return parcial
}


function inicializaCores(){
  background("white");
  fill("black");
  textSize(40);
  textAlign(CENTER,CENTER);
}

function draw() {
  inicializaCores();
  let parcial=palavraParcial(0,width);
  text(parcial,250,250);
}
