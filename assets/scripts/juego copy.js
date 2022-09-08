var canvas;
var ctx;
const FPS = 50;

var imgRex;

var Protagonista = function (x, y) {
    this.x = x;
    this.y = y;
    this.velocidad = 3; //3 px

    this.dibuja = function(){
        ctx.drawImage(imgRex, this.x, this.y);
    }

    this.texto = function(){
        ctx.font = '30px impact';
        ctx.fillStyle = '#555555';
        ctx.fillText(`X: ${this.x}`, 100, 100);
    }

    this.arriba = function(){
        this.y -= this.velocidad;
    }

    this.abajo = function(){
        this.y += this.velocidad;
    }

    this.izquierda = function(){
        this.x -= this.velocidad;
    }

    this.derecha = function(){
        this.x += this.velocidad;
    }
}

var Personaje = function(x,y){
    this.x = x;
    this.y = y;
    this.derecha = true;

    this.dibuja = function(){
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(this.x, this.y, 50, 50);        
    }    

    this.mueve = function(velocidad){
        

        if(this.derecha){
            if(this.x < 400 ){
                this.x += velocidad;
            }else{
                this.derecha = false;
            }
        }else {
            if(this.x > 50){
                this.x -= velocidad;
            }else{
                this.derecha = true;
            }
        }
    }
}

var per1 = new Personaje(10, 50);
var per2 = new Personaje(10, 120);
var per3 = new Personaje(10, 230);

var prota = new Protagonista(200, 200);

document.addEventListener('keydown', function(tecla){
    
    //ARRIBA
    if(tecla.keyCode == 38){
        prota.arriba();
    }

    //ARRAJO
    if(tecla.keyCode == 40){
        prota.abajo();
    }

    //IZQUIERDA
    if(tecla.keyCode == 37){
        prota.izquierda();
    }

    //DERECHA
    if(tecla.keyCode == 39){
        prota.derecha();
    }
});



function inicializar(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    //CARGAMOS LA IMAGEN DEL REX
    imgRex = new Image();
    imgRex.src = 'assets/img/car-flat.png';

    setInterval(function(){
        principal();
    }, 1000/FPS);
}

function borrarCanvas() {
    canvas.width = 500;
    canvas.height = 400;
}

function principal(){
    borrarCanvas();
    per1.dibuja();
    per2.dibuja();
    per3.dibuja();

    per1.mueve(1);
    per2.mueve(3);
    per3.mueve(7);

    prota.dibuja();
    prota.texto();
    // console.log('function');
}
