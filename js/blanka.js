class Blanka{
    constructor(){
        this.imagem = loadImage("img/blanka.gif");
        this.largura = 120;
        this.altura = 120;
        this.posX = 810;
        this.posY = 360;
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