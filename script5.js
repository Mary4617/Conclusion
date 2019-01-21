var t;
var b1=0;
var g1=140;
var r1=255;
function f()
{
var x1=document.getElementById('b11');
x1.style.left=(parseInt(x1.style.left)+70)+'px';
x1.style.down=(parseInt(x1.style.top)+50)+'px';
b1-=0;
g1-=69;
r1-=255;
str1='rgb('+b1+', '+g1+', '+r1+')';
x1.style.backgroundColor=str1;
}
function k()
{t=setInterval('f()',300);}
function g()
{
clearInterval(t);
}
