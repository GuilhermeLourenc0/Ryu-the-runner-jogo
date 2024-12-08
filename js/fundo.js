class Fundo{
    constructor(){
     this.imagem = loadImage ("img/fundo2.png") ;
     this.largura = 1600;
     this.altura = 600;
     this.posX = 0;
     this.posY = 0;
     this.velocidade = 2;
    }    

    exibir(){
        image(this.imagem, this.posX, this.posY, this.largura, this.altura);
    }

    movimenta(){  
        this.posX -= this.velocidade;
        image(this.imagem, this.posX, this.posY, this.largura, this.altura);
        
    }
}