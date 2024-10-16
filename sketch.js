// comédia, drama, fantasia, animação

// Moxie,14,Comédia,drama
// Nanny McPhee, LIVRE, Comédia,família,fantasia
// O menino do pijama listrado,12, Drama,guerra,história
// As branquelas, 12, Comédia,polícial
// Up.Altas aventuras, LIVRE, Animação,aventura,comédia,drama,família

let campoIdade;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("15");
}

function draw() {
  background(220);
  let idade = campoIdade.value(); 
  let recomendacao = geraRecomendacao(idade)
  text(recomendacao, width/2, height/2);
  
}
function geraRecomendacao(idade){
  if(idade >= 12) { 
    if(idade >= 14) { 
      return "moxie"
    } else {
  return"o menino do pijama listrado";
    }
  } else {
  return " up. altas aventuras"  
  }
  }

