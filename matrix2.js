//Seleccionamos el canvas con su identificacion
const canvas = document.getElementById('lienzo');
//Seleccionamos su contexto
const ctx= canvas.getContext('2d');

canvas.width= document.body.offsetWidth;

//Guardamos el alto y el ancho

const w = canvas.width;
const h = canvas.height;

//Seleccionamos un color para pintar y lo pintamos todo

ctx.fillStyle= '#000';
ctx.fillRect(0,0,w,h);

//Dividimos el lienzo en 20 columnas

const cols = Math.floor(w/20)+1;

//Empezamos a pintar desde arriba

const posicion_y = Array(cols).fill(0);

//Función Matrix

function matrix ()
{
//Escogemos el negro para pintar

ctx.fillStyle = '#0001';

//Lo volvemos muy tranparente

ctx.fillRect(0,0,w,h);

//Seleccionamos el color verde y escogemos fuente

ctx.fillStyle='#0f0';
ctx.font= '15pt monospace';

posicion_y.forEach((y,ind)=>
{
const text=
String.fromCharCode(Math.random()* 128);
const x = ind * 20;
ctx.fillText(text,x,y);
if(y>100 + Math.random()*10000)
{
    posicion_y[ind]=0;

}
else posicion_y[ind] = y+20;
});

}
//Decimos que se ejecute cada 50 ms
setInterval(matrix,50);