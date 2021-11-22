 // 1. Ways to print in JavaScript
    // console.log("Hello World");
    // alert("Me");
    // document.write("this is document write")

    //  2.Javascript console API
    // console.log("Hello world", 4 + 6, "Another log");
    // alert("me")
    // document.writte("this is document write")
    // console.warn("this is warning")
    // console.error("This is an error")

    // 3.JavaScript Variable
   // What are Variables?- Container to store data value

   //multi
   //line
   //comment


   var number1 = 34;
   var number2 = 56;
   console.log(number1 + number2);


   // 4 Data types in JavaScript 
   // Number 
   var num1 = 455;
   var num2 = 56.76;


   // String 
   var str1 = "This is a string ";
   var str2 = "This is a also a string ";


   //Objects
   var marks ={
       ravi: 34,
       shubham :78,
       harry : 99.977

   }

   // Booleans
   var a = true;
   var b = false;
   console.log(a,b);

   // var und = undefined;
   var n = null;
   console.log(und);


   var und = underfined;
   console.log(und);

/*
At a very high level , there are two types of data types in JavaScript 
1. Primitive data types: underfined , null , number , string , boolean , symbol
2. Reference data types : Array and Objects
*/

var arr= [1,2,sam,4,5]
//console.log(arr)


// Operators in JavaScript
//Arithmitic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b is", a+b);
// console.log("The value of a - b is", a-b);
// console.log("The value of a * b is", a*b);
// console.log("The value of a / b is", a/b);


// Assigment Operators
var c = b;
// var c = b;
// c=+2;
// c -=2; // c= c-2;
// c*=2; 
// c /=2;
// console.log(c)

// Comparison Operators
var x = 34;
var y = 56;
// console.log( x==y);
// console.log( x>=y);
// console.log( x<=y);
// console.log( x>y);
// console.log( x<y);


//Logical Operators


// Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

//Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)
//Logical not

// console.log(!false)
// console.log(!true)


// Function in JavaScript
// function avg(a,b){
//     c = (a + b)/2;
// }
// c1 = avg(4,6);
// c2 = avg(14,16);
// console.log(c1,c2);

// Conditionals in JavaScript

// var age = 4;
// if(age > 2){
//     console.log('You are not a kid');
// }
// else{
//     console.log('You are a kid');
// }

// var age = 11;
// if(age > 18){
//     console.log('You can drink rasna water');
// }
// else{
//     console.log('You cannot drink rasna water');
// }

// var age = 41;
// Single if statement 
// if(age > 18){
//     console.log('You can drink rasna water')
// }


// if-else Ladder
// if(age > 32){
//     console.log("You are nahi a kid");
// }
// if(age > 26){
//     console.log("Bachhe nahi rahe");
// }
// if(age > 22){
//     console.log("Yes Bachhe nahi rahe");
// }
// if(age > 18){
//     console.log("You are nahi a kid");
// }
// else{
//     console.log("Bachhe rahe");
// }
// console.log("End of ladder");



// var arr = [1,2,3,4,5,6,7,8];
// console.log(arr);
// for(var i = 0; i< arr.length; i++){
//     if(i == 2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }

// var a =100;
// var b = 10;

// arr.forEach(function(element){
//     console.log(Element)
// })


// let j = 0;
// const a =0 ;
// a = a +1;


let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// }while (j < arr.length);


let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods
console.log(myArr.length);
// myArr.pop();
// myArr.push("harry")
// newLen = myArr.unshift("Harry")
// console.log()
// myArr.shift()
// console.log(myArr);


//String Methods in JavaScript
let myLovelyString  ="Harry is a good boy good good";
// console.log(myLovelyString.length) 
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.indexOf("good"))

// console.log(myLovelyString.slice(1,4))
d=myLovelyString.replace("Harry", "Rohan");
// d = d.replace("good", "bad")
// console.log() 


 myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());
 
// DOM Manipulation
let elem = document.getElementById('click')
console.log(elem);

let elemClass = document.getElementsByClassName("container")
// console.loge(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('div')
console.log(tn)
createdElement = document.createElement('p');
createElement.innerText = "This is a created para";
tn[0].appendchild(createdElement);
createdElement2 = document.createElement('p');
createElement2.innerText = "This is a created para";
tn[0].replacechild(createdElement2,createdElement);
// removeChild(element); --> removes an element

// Selecting using Query
sel = document.querySelector('.container')
console.log(sel);
sel = document.querySelectorAll('.container')
console.log(sel);


function clicked(){
    console.log('The button was clicked');
}
window.onload = function(){
    console.log('The document was loaded');
}
// Events in JavaScript
firstContainer.addEventListener('Click ', function(){
    document.querySelectorAll('container')[1].innerHTML = "<b> We have clicked </b>"
    console.log("Clicked on Container");
})
// firstContainer.addEventListener('mouseover ', function(){
//     console.log("Mouse on container");
// })
// firstContainer.addEventListener('mouseout ', function(){
//     console.log("Mouse out of Container");
// })



// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     console.log("Mouse up when clicked on container");
// })
// firstContainer.addEventListener('mousedown', function(){
//         document.querySelectorAll('container')[1].innerHTML = "<b> We have clicked </b>"
//     console.log("Mouse down when clicked on container");
// })

//Arrow Functions 
//function summ(a,b){
//     return a+b;
// }

summ = (a,b)=>{
    return a+b;
}
logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> set interval fired </b>"
    console.log("I am your log")
}

// setTimeout and setinterval
// setTimeout(logKaro, 2000);
//clr = setInterval(logkaro,5000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout


// JavaScript localStorage
// localstorage.setItem('name', 'harry')
// localStorage
// localStorage.getItem('name')


// Json
// obj = {name: "harry",lenght:1, a:{this: 'tha\"t'}}
// js = JSON.stringify(obj);
// console.long(typeof jso)
// console.log(jso)
// parsed = JSON.parse({"name": "harry","lenght":1, "a":{"this": "tha\"t"}})
// console.log(parsed)


// Template literals - Backticks
a = 34;
console.log('this is my ${a}')