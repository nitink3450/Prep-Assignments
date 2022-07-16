//closures-
//Q.1. find output-
// function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }
// var counter = counter();
// alert(counter());//1
// alert(counter());//2
// alert(counter());//3
// alert(counter());//4

//Q.2.

// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count);//what is logged?//1
//   }
//   console.log(count);//what is logged?//0
// })();

//Q.3.

// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?=> 3 times 3
//     }, 1000);
//   }

//Q.4.Print Output

// var a = 12;
// (function () {
//   alert(a);//12
// })();

//Q.5.
// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);//12
//   };
// })();
// x();

//Q.6.

// var globalVar = "xyz";

// (function outerFunc(outerArg) {
//     var outerVar = 'a';
    
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
    
//     console.log(
//         "outerArg = " + outerArg + "\n" +//123
//         "innerArg = " + innerArg + "\n" +//456
//         "outerVar = " + outerVar + "\n" +//a
//         "innerVar = " + innerVar + "\n" +//b
//         "globalVar = " + globalVar);//xyz
    
//     })(456);//outerArg
// })(123);//innerArg

//Q.7.  Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

// function outer(length){
//    function inner(breadth){
//        console.log(`Area of rectangle is ${length * breadth} square meter`)//Area of rectangle is 18000 square meter
//    }
//    inner(90);//breadth
// }
// outer(200);//length


//Q.8.Take a variable in outer function and create an inner function to increase the counter every time it is called

// function outside(){
//     let  x = 0;
//      return function inside(){
//          x++;
//          console.log(x);
         
//     };
   
// }

// let y = outside();
// y();//1
// y();//2
// y();//3
// y();//4
// y();//5