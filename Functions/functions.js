//Q.1. Create one function with zero parameter having a console statement;
let print= function(){
    console.log('Hello World');//Hello World
}
print();

//Q.2 Create one arrow function
 let Arrow=()=>{
    console.log('Arrow funtion');//Arrow funtion

 }
 Arrow();

//Q.3 Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
function add(a,b){
    let sum=a+b;
    console.log(`Sum of ${a},${b} is ${sum}`);
}
add(3,4);

//Q.4 Print output
var x = 21;
var girl = function () {
    console.log(x);//undefined
    var x = 20;
};
girl ();

//Q.5 "Print output: 
var x = 21;
girl ();
console.log(x)//21
function girl() {
    console.log(x);//undefined
    var x = 20;
};


//Q.6 Print output
// a and b are not defined;
var x = 21;
a();
b();
console.log(a);
 a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};

//Q.7 Write a function that accepts parameter n and returns factorial of n

let factorial = (n) =>{
    let fact = 1;
    for(let i=2; i<=n; i++){
        if (n==0){
            fact=1;
            break;
        }
        fact *=i;
    }
    console.log("the factorial of the " + n + " is: " + fact);
  }
  factorial(5);