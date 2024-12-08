let imgBlanka;
let imgRyu;
let imgFundo; 
let pular= 3;


function preload() {
    imgFundo = loadImage("img/fundo2.png");
    imgBlanka = loadImage("img/blanka.gif");
    imgRyu = loadImage("img/ryurun.gif");
  }

function setup() {
    createCanvas(800, 600); //AS PROPORÇÕES DA TELA DO JOGO
    imgRyu = new Ryu();
    imgBlanka = new Blanka();
    imgFundo = new Fundo();
  }

function draw() {
    imgFundo.exibir();
    imgFundo.movimenta();
    imgBlanka.exibir();
    imgBlanka.movimenta();
    imgRyu.exibir();
    imgRyu.pular();
    if (imgFundo.posX < -800) {
        imgFundo = new Fundo(this.posX=800);
    };
    if (imgBlanka.posX < -100) {
      imgBlanka = new Blanka(this.posX=1000);
  };
function keyPressed(){
  if(keyCode==32){
    pular=0
  }
  }
}
    
