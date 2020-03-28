//transforma a snake em canvas no java 
//para ser mais fácil de entender
let canvas = document.getElementById("snake");
//renderiza o desenho que vai ser criado dentro do canvas
//colocando para ser tratado como 2d
let context = canvas.getContext("2d");
// 32 pixels cada quadradinho do jogo
let box = 32;
let snake = []; // declara como array
snake[0] = { //escolhido tamanho da cobrinha
    x: 8 * box,
    y: 8 * box
}
//variavel com as direções que queremos que a cobra se mova
let direções = "right";





//inicia o canvas desenhando e definindo cor
function criarBG(){ //criar background
    //fillstyle trabalha com o estilo do canvas
    context.fillStyle = "Lightgreen"; 
    //fillRect(Posição X, posição Y, altura, largura)
    context.fillRect(0, 0, 16 * box, 16 * box);
}




//cobrinha é um array de coordenadas
//adiciona uma coordenada e tira a última para dar 
//o movimento
function criarCobrinha(){
    //for vai percorrer todo o tamanho do array
    //e então incrementar, vai pintar a cobrinha de verde
    //e setar o tamanho dela corretamente

    for(i=0; i<snake.length; i++){
        //passar o context ligado a cobra
        context.fillStyle = "green";
        // x e y são os tamanhos passados lá em cima e 
        //box é o tamanho do quadradinho de 32 pixels
        context.fillRect(snake[i].x,snake[i].y, box, box);
    }
}




//criar função que atualize o jogo de tempos em tempos
//para que ele consiga se mover nesse intervalo
//e ela vai parar o jogo quando a cobrinha 
//encostar no próprio corpo
function iniciarJogo(){
    //passar todas as outras funções para iniciar tudo
    criarBG();
    criarCobrinha();

    //criar as posições x e y da cobrinha
    //para quando setar os movimentos, ter um ponto de partida
    let snakeX = snake[0].x; //array posicao zero de x
    let snakeY = snake[0].y; //array posicao zero de y
    
    //criação de cordenadas da cobrinha
    //passar condicionais para passar o lado certo
    //que a cobrinha vai ir
    if(direções == "right"){ //se for para a direita, adiciona um
        snakeX += box;
    }
    if(direções == "left"){ //se for para a esquerda, tira um
        snakeX -= box;
    }
    if(direções == "up"){ //se for para cima, tira um
        snakeY -= box;
    }
    if(direções == "down"){//se for para baixo, adiciona um
        snakeY += box;
    }

    //adicionar função pop para tirar o ultimo elemento
    //do array quando a cobra andar
    snake.pop();

    //adicionar a cabeça com um método que sempre adiciona
    // um primeiro elemento
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}



//intervalo de 100 mili segundos para a iniciar jogo
//reiniciar e renovar os estados
let jogo = setInterval(iniciarJogo, 100);

