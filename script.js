//transforma a snake em canvas no java 
//para ser mais fácil de entender
let canvas = document.getElementById("snake");
//renderiza o desenho que vai ser criado dentro do canvas
//colocando para ser tratado como 2d
let context = canvas.getContext("2d");
// 32 pixels cada quadradinho do jogo
let box = 32;
let snake = [];  // declara como array
snake[0] ={ //escolhido tamanho da cobrinha
    x: 8 * box,
    y: 8 * box
}
//variavel com as direction que queremos que a cobra se mova
let direction = "right";
//para ter coordenadas "aleatórias", usaremos uma 
//função  que cria números aleatórios
//floor faz mandar apenas números inteiros
//e random faz mandar um número aleatório
let food ={
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}




//inicia o canvas desenhando e definindo cor
function criarBG(){ //criar background
    //fillstyle trabalha com o estilo do canvas
    context.fillStyle = "lightgreen";
    //fillRect(Posição X, posição Y, altura, largura)
    context.fillRect(0, 0, 16*box, 16*box);
}




//cobrinha é um array de coordenadas
//adiciona uma coordenada e tira a última para dar 
//o movimento
function criarCobrinha (){
    //for vai percorrer todo o tamanho do array
    //e então incrementar, vai pintar a cobrinha de verde
    //e setar o tamanho dela corretamente

    for(i = 0; i < snake.length; i++){
        //passar o context ligado a cobra
        context.fillStyle = "green";
        // x e y são os tamanhos passados lá em cima e 
        //box é o tamanho do quadradinho de 32 pixels
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood(){
    context.fillStyle = "red";
    // para definir as corrdenadas da comida, vamos 
    //criar um array 
    context.fillRect(food.x, food.y, box, box);
}



 //mexer com os controles dela e fazer com que não suma 
 //da tela. 
 //fazer que o programa reconheça as teclas do teclado
 //com os valores corretos. Transmitindo o código da tecla
 //para a função.

 //pega o clique do teclado (keydown) e chama o update
 document.addEventListener('keydown', update);

//se o número for 37, direita
//38 para baixo
//39 para esquerda
//40 para cima
//a cobra não pode ir para a exata direção oposta ao passo
//anterior, então usa-se uma ordem condicional para isso
//argumento é o evento de tecla
function update(event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}



//criar função que atualize o jogo de tempos em tempos
//para que ele consiga se mover nesse intervalo
//e ela vai parar o jogo quando a cobrinha 
//encostar no próprio corpo
function iniciarJogo(){  

    //permitir que ela saia por um lado e volte pelo outro 
    //com um plano cartesiano que tem o x0 e o y0 
    //indo até 16 dos dois lados. Quando chegar no zero, volta
    // o valor no 15 e vice versa 
    //se snake[0].(cabeça) passar de 15, volta para zero
    if(snake[0].x > 15*box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15*box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;
    

    //passar todas as outras funções para iniciar tudo
    criarBG();
    criarCobrinha();
    drawFood();


    //criar as posições x e y da cobrinha
    //para quando setar os movimentos, ter um ponto de partida
    let snakeX = snake[0].x; //array posicao zero de x
    let snakeY = snake[0].y; //array posicao zero de y
    
    //criação de cordenadas da cobrinha
    //passar condicionais para passar o lado certo
    //que a cobrinha vai ir

    //se for para a direita, adiciona um
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    //adicionar função pop para tirar o ultimo elemento
    //do array quando a cobra andar
    snake.pop();

    //adicionar a cabeça com um método que sempre adiciona
    // um primeiro elemento
    let newHead ={
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead); //método unshift adiciona como primeiro quadradinho da cobrinha
}


 
//intervalo de 200 mili segundos para a iniciar jogo
//reiniciar e renovar os estados
let jogo = setInterval(iniciarJogo, 200);


























/*
let canvas = document.getElementById("snake"); //criar elemento que irá rodar o jogo
let context = canvas.getContext("2d"); //....
let box = 32;
let snake = []; //criar cobrinha como lista, já que ela vai ser uma série de coordenadas, que quando pintadas, criam os quadradinhos
snake[0] ={
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food ={
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16*box, 16*box); //desenha o retângulo usando x e y e a largura e altura setadas
}

function criarCobrinha (){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood (){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

//quando um evento acontece, detecta e chama uma função
document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}

function iniciarJogo(){    

    if(snake[0].x > 15*box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15*box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;
    
    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop(); //pop tira o último elemento da lista
    }else{
        food.x = Math.floor(Math.random() * 15 +1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
    }
    
    let newHead ={
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); //método unshift adiciona como primeiro quadradinho da cobrinha
}

let jogo = setInterval(iniciarJogo, 100);
*/
