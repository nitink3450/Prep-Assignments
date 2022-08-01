//Q.35.Write a code to create two objects with 2 properties each,
//one will be string and other will be an array.
// Create a function to check if all the elements of the arrays in both the objects are same

// let obj1={
//     name:'naveen',
//     arr1:[1,2,3,4,5]
// }
// let obj2={
//     name:'naveen',
//     arr2:[1,2,3,4,5]
// }

// function check(obj1,obj2){
// let n=obj1.arr1.length
// let length=0;
// for(let i in obj1.arr1){
//     if(obj1.arr1[i]===obj2.arr2[i]){
//         length++;
//     }
// }
// if(length===n){
//     console.log('Equal')
// }
// else{
//     console.log('Not Equal');
// }
    
// }
// check(obj1,obj2)

//Q.36.Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second?


//how to disaplay current time in js-
// const Digital_Clock = () => {
//     const time =new Date();
//     let hrs = time.getHours();
//     let min = time.getMinutes();
//     let sec = time.getSeconds();
//     document.getElementById('clock').innerHTML=(`${hrs}:${min}:${sec}`)
    
//   }
//   setInterval(Digital_Clock,1000);
 
//how to disaplay current (today) date in js-

// var today = new Date();
// var dd = today.getDate()
// var mm = (today.getMonth()+ 1); //January is 0!
// var yyyy = today.getFullYear();

// today = mm + "/" + dd + "/" + yyyy;
// document.write(today);

// var Count_Vowels= (S) => 
// { 
//   let countvowels=  S.match(/[aeiou]/gmi).length;
//      console.log(countvowels);
// }
// Count_Vowels('aeiouaassfdsdg')\

// function displayTime() {
//     time=new Date();
//     // console.log(time);
//     document.getElementById('clock').innerHTML=time;
    
//   }
//   setInterval(displayTime,1000);

// let  oddeven =(arr)=>{
//     if(arr.filter(item => item%2 ==0))
// } 

// const findEvenOdd = (Arr) => 
// {
//      let odd_sum= 0;
//     let even_sum= 0;
//     for(let i=0; i<Arr.length; i++){
//       if(Arr[i]%2 === 0 ){
//         even_sum+=1;
//       }
//       else{
//         odd_sum+=1;
//       }
//     }
//     console.log(`EVEN=${even_sum} AND ODD=${odd_sum}`);
// }
// findEvenOdd([1,3,3,4,6,6,6,6])


// let obj1={
//     name:'naveen',
//     arr1:[1,2,3,4,5]
// }
// let obj2={
//     name:'naveen',
//     arr2:[1,2,3,4,5]
// }

// let foo=(obj1,obj2)=>{
//     let obj1Length=obj1.arr1.length;
//     let obj2Length=0;
//     for(let i in obj1.arr1){
//         if(obj1.arr1[i]===obj2.arr2[i]){
//             obj2Length+=1;
//         }
//     }
//     if(obj1Length === obj2Length){
//         console.log('equal')
//     }
//     else{
//         console.log('not equal');
//     }

// }
// foo(obj1,obj2)

// function numberOfZeros(array) {
//     var zeros = [];
//     var ones=[]
//     for(var i = 0; i < array.length; i ++){
//         if(array[i] === 0) {
//             zeros.push(array[i]);
//         }
//         else if(array[i] === 1){
//             ones.push(array[i])
//         }
//     }
//     console.log("zeros ="+zeros.length);
//     console.log("ones ="+ones.length);
// }
// numberOfZeros([4, 0, 1, 5, 0]);

// for(var j = 0; j < array.length; j ++){
//     if(array[j] === 1) {
//               ones.push(array[j]);
//           }
//       }


// let findzero = (arr) =>{
//     let zero=0;
//     let one=0;
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i]===0){
//             zero+=1
//         }
//         else if(arr[i]===1){
//             one+=1;
//         }
//     }
//     console.log(`zero=${zero} & one=${one}`);

// }
// findzero([1,2,3,0,0,0,0,1,1,1])


// let clock=document.getElementById('clock');
// let btn = document.getElementById('btn');
// btn.addEventListener('click',()=>{
//     let child =document.createElement('H1');
//     child.innerText= 'MERN STACK';
//     clock.appendChild(child);
// })

// let firstone = document.getElementsByTagName('h1')[0];
// firstone.style.color='red';

// let btn2=document.getElementById('btn2');
// btn2.addEventListener('click',()=>{
//     let hide =document.getElementsByTagName('h2')[0];
//     hide.style.display='none';
// })

// let btn3=document.getElementById('btn3');
// btn3.addEventListener('click',()=>{
//     let text=document.getElementsByTagName('h2')[1];
//     text.innerHTML = 'welcome';
// })


// document.write(Date());

