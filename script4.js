﻿function $() 
{ var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{ var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; }

function f1(x)
{
var resultTrue ="Okay";
var resultFalse ="Fail";
if(x.length){
if (isNaN(x))
	return resultFalse;
else
	if(x<1000000 && x>9999)
	return resultTrue;
else 
	return resultFalse;

}
else
return resultFalse;
}
