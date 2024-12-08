class Ryu{
    constructor(){
        this.imagem = loadImage("img/ryurun.gif");
        this.largura = 130;
        this.altura = 130;
        this.posX = 20;
        this.posY = 340;
        this.velocidade = 2;
    }
    exibir(){
        image(this.imagem, this.posX, this.posY, this.largura, this.altura);
    }
    pular(){
        image(this.imagem, this.posX, this.posY, this.largura, this.altura);
        
        if((pular == 0 && this.posY > 210)){
            this.posY -= this.velocidade;
        } if(this.posY <= 210){
            pular = 1;
        } if((pular == 1 && this.posY < 430)){
            this.posY += this.velocidade;
        }

        this.xInicial = this.posX;
        this.xFinal = this.posX + this.largura;
        this.yInicial = this.posY;
        this.yFinal = this.posY + this.altura;
    }
}