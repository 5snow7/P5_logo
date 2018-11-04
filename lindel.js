
function lindel(sent){
let newsent="";
let ch='';
for(let j=0;j<sent.length;j++){
ch=sent.charAt(j);
switch(ch){
	case 'A':newsent=newsent+"A+A--A+A";break;
	case '+':newsent=newsent+"+";break;
	case '-':newsent=newsent+"-";break;
	}}	
return newsent;	
}
