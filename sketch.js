//testing github
let can,can2;
let t;let st;
function setup() {
can=createCanvas(windowWidth,windowHeight);
can.position(200,10);
can.class("bdd");
t=new logo(200,200,0);
//noLoop();
can2=select('#myCanvas');can2.position(0,100);
can2.class("bdd");
textSize(18);st="A+A--A+A";
}
let x1=0;let x=0;
let a=0;let st1="A+A+A";let st2="+A+A+A";

function draw() {
//clear();
background(x1,200,0);
rect(40,40,20,50);
fill(0,250,0);
ellipse(80,80,100,30);
t.set1(400,400,0);
t.fd(50);for(let j=3;j<12;j++){t.poly(50,j);}

t.set1(200,height/2,0);
sir(t,500,4);

//text(lindel("A"),100,200);
ctx.moveTo(200,0);
ctx.lineTo(x,50);x=x+14;
if(x>200){x=0;}
ctx.stroke();
for(let j=0;j<10;j++){
ctx.moveTo(0,15*j);ctx.lineTo(200,15*j);ctx.stroke();
}
t.set1(50,300,0);
t.sketch(3,60,lindel(st));
text(st,20,200);
}


function keyPressed(){

st=lindel(st);
x1=x1+30;
if(x1>260){x1=0;}

}
