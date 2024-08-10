/* there are 2 types of variables in javascript: const and let/var 
- the const variable is a constant variable i.e one that cannot change 
- the let/var variable is a dynamic variable i.e it can change dynamically 
- here document is saying that it is referencing a html document 
- it allows us to reference any element in the html document 
- in this case, we want to refernece the whole html document by using getElement by the tag name
- we use TagName because we want to get the tag name of the body element 
- this returns an array of the different elements that have this tag name */
// there is only on ebody in out html document so to access it, we call it's index [0]
// similarly if we had multiple elements with the same tag name, we would have to access them by their index
const body= document.getElementsByTagName('body')[0]; 
// the below statement changes the background color of the body to red
//the reason it happens, is because once we have made our ui elements like the <buttons> we have linked our script tag
// and inside the script tag, we are getting the body component and changing the style, specifically the background color to red
//body.style.backgroundColor = 'red'; 
function setColor(name){
    body.style.backgroundColor = name;
}
function randomColor(){
    // Math.random generates a random number between 0-1 but it gives us a lot of digits after the decimal point
    // so we use Math.round to round it to the nearest whole number
    const red =Math.round(Math.random()*255); 
    const green =Math.round(Math.random()*255);
    const blue =Math.round(Math.random()*255);
    //backticks are used to concatenate strings in javascript
    // we are using the rgb color format to set the color of the body
    const color=`rgb(${red},${green},${blue})`; 
    body.style.backgroundColor = color;
}
