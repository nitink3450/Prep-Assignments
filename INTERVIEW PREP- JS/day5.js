//Q.1. Create a button , on click of which new Heading tag h1 should be
// added with text as "MERN stack" on the screen above button

let clock=document.getElementById('Q1');
let btn = document.getElementById('btn1');
btn.addEventListener('click',()=>{
    let child =document.createElement('H1');
    child.innerText= 'MERN STACK';
    clock.appendChild(child);
});

//Q.2.Write code to get 1st H1 element from a webpage using DOM

let firstone = document.getElementsByTagName('h1')[0];
firstone.style.color='red';

//Q.3.Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

let Clock = () => {
    const time =new Date();
    let HH = time.getHours();
    let MM = time.getMinutes();
    let SS = time.getSeconds();
    document.getElementById('clock').innerHTML=(`${HH}:${MM}:${SS}`)
  }
  setInterval(Clock,1000);

//Q.4.Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

let btn2=document.getElementById('btn2');
btn2.addEventListener('click',()=>{
    let text=document.getElementsByTagName('h2')[0];
    text.innerHTML = 'welcome to elevation academy';
})

//Q.5.Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text

let btn3=document.getElementById('btn3');
btn3.addEventListener('click',()=>{
    let hide =document.getElementsByTagName('h2')[1];
    hide.style.display='none';
})

//Q.6.Given an array of 0's and 1's find out number of 0's

let findzero = (arr) =>{
    let zero=0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i]===0){
            zero+=1
        }
    }
    console.log(`zero=${zero}`);

}
findzero([1,2,3,0,0,0,0,1,1,1])

//Q.7.Given an array find out total no. of odd and even nos.

const findEvenOdd = (Arr) => 
{
     let odd_sum= 0;
    let even_sum= 0;
    for(let i=0; i<Arr.length; i++){
      if(Arr[i]%2 === 0 ){
        even_sum+=1;
      }
      else{
        odd_sum+=1;
      }
    }
    console.log(`EVEN=${even_sum} AND ODD=${odd_sum}`);
}
findEvenOdd([1,3,3,4,6,6,6,6])

//Q.8.Given a string find out number of vowels 

var vowel= (S) => 
{ 
  let countvowels= S.match(/[aeiou]/gmi).length;
     console.log(`total vowel =${countvowels}`);
}
vowel('aeiouaassfdsdg');

//Q.9.Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same

let obj1={name:'trip', ar1:[1,2,3,4,5]};
let obj2={name:'india',ar2:[1,2,3,4,5]};

function match(obj1,obj2){
let length1=obj1.ar1.length
let length2=0;
for(let i in obj1.ar1){
    if(obj1.ar1[i]===obj2.ar2[i]){
        length++;
    }
}
if(length2===length1){
    console.log('arrays r Equal')
}
else{
    console.log('arrays r not Equal');
}
}
match(obj1,obj2)