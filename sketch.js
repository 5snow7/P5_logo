let can;
let t;
function setup() {
can=createCanvas(500,400);
can.position(100,100);
can.class("bdd");
t=new logo(200,200,0);
}

let a=0;
function draw() {
//clear();
background(250,0,0);
rect(40,40,20,50);
fill(0,250,0);
ellipse(80,80,100,30);
for(let j=0;j<6;j++){pent(t,10*j);}
t.set1(200,100,0);t.fd(50);
sketch(t,40,45,"A-B-B++AABB");
}

function pent(t,len){
	t.fd(len);t.rt(72);t.fd(len);t.rt(72);
	t.fd(len);t.rt(72);t.fd(len);t.rt(72);
	t.fd(len);t.rt(72);
}