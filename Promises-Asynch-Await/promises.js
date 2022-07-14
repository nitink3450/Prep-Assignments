//Q.1 Write one example explaining how you can write a callback function ?
//#Callback: A callback is a function that is passed as an argument to another function that executes
//            the callback based on the result. They are basically functions that are executed only after a result is produced.
//            Callbacks are an important part of  asynchronous JavaScript.

function foo(cb){//cb=call back function
    console.log('i am function foo()');
    cb(2,3);//calling soo() function as an callback function
}

function soo(c,d){
    console.log('i am callback function soo()');
    console.log(` and the addition of ${c} and ${d} is ${c + d}`);
}
// foo(soo);//just called the foo func by passing an another function as an argument called callback function

//Q.2 "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec ,
    // 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
    // Explain callback hell.
    // Numbers
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    // 7"

function numPrint(){
    setTimeout(() =>{
        console.log('1');

        setTimeout(() =>{
            console.log('2');   
            
            setTimeout(() =>{
                console.log('3');

                setTimeout(() =>{
                    console.log('4');

                    setTimeout(() =>{
                        console.log('5');

                        setTimeout(() =>{
                            console.log('6');

                            setTimeout(() =>{
                                console.log('7');

                                console.log('End of nested call back hell function')

                            },7000)
                        },6000)
                    },5000)
                },4000)
            },3000)
        },2000)
    },1000)
}
// numPrint();

// Callback Hell: Callback Hell is essentially nested callbacks stacked below one another forming 
                // a pyramid structure. Every callback depends/waits for the previous callback, thereby making 
                // a pyramid structure that affects the readability and maintainability of the code.
 
 //numPrint() is made up of set of callback functions which r called after some seconds/after previous one is executed.
 // but here the code structure is completely messy to see and hard to find the error while debugging. 
 //thats why it is called as callback hell.
 //and also hard to find where we r exactly in those callback functions.
 //this is worst/bad  codestructure of Callback fuctions.


//Q.3 "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec ,
//  2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
    // Numbers
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    // 7"
    // let num =new Promise((fullfilled,reject)=>{
     
    //     setTimeout(()=>{
    //         fullfilled(console.log("1"))
    //     },1000)
       
    // }).then( ()=> new Promise((fullfilled,reject)=>{
    
    //    setTimeout(()=>{
    //     fullfilled(console.log("2"))
    //    },2000)
    
    // }) ).then( ()=> new Promise((fullfilled,reject)=>{
    
    //    setTimeout(()=>{
    //     fullfilled(console.log("3"))
    //    },3000)
    
    // }) ).then(()=> new Promise((fullfilled,reject)=>{
       
    //     setTimeout(()=>{
    //         fullfilled(console.log("4"))
    //     },4000)
    
    // })).then(()=> new Promise((fullfilled,reject)=>{
       
    //     setTimeout(()=>{
    //         fullfilled(console.log("5"))
    //     },5000)
    // })).then( ()=> new Promise((fullfilled,rej)=>{
       
    //     setTimeout(()=>{
    //        fullfilled(console.log("6"))
    //     },6000)
    
    // })).then(()=> new Promise((fullfilled,rej)=>{
        
    //     setTimeout(()=>{
    //         fullfilled(console.log("7"))
    //         console.log("end of promises");
    //     },7000)
    // }));

//Q.4. Create a promise function accepting a argument, if yes is passed to the function then it should go to 
//  state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch
//   the error and print Promise Rejected 
function pro(cond){
        let yesProm = new Promise(function(resolve,reject){
            (cond == 'yes')? resolve('Promise Resolved') : reject('Promise Rejected'); 
        })
        return yesProm;
   }
    pro('yes')
    .then(data => console.log(data)).catch(err=>console.log(err));

//Q.5. Create examples to explain callback function-

//The benefit of using a callback function is that you can wait for the 
//result of a previous function call and then execute another function call.

//e.g.1
function myName(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
myName('nitin', callMe);

// e.g.2

let first = ()=>{
    console.log('first');
}
let second = ()=>{
    console.log('second');
}
let third = ()=>{
    console.log('third');
    second()
}
setTimeout(first,2000);
third();


//Q.6. Create examples to explain callback hell function

function numPrint(){
    setTimeout(() =>{
        console.log('1');

        setTimeout(() =>{
            console.log('2');   
            
            setTimeout(() =>{
                console.log('3');

                setTimeout(() =>{
                    console.log('4');

                    setTimeout(() =>{
                        console.log('5');

                        setTimeout(() =>{
                            console.log('6');

                            setTimeout(() =>{
                                console.log('7');

                                console.log('End of nested call back hell function')

                            },7000)
                        },6000)
                    },5000)
                },4000)
            },3000)
        },2000)
    },1000)
}

//Q.7. Create examples to explain promises function

//when we call an API ,we wrap it into promise .if server is running or API is fine,then it will return success.if the API is invalid,then it will return an error.
//promise is always binded to a condition behind it.

function MyPromise() {
    const apiResponse = new Promise(function (fullfilled, rejected) {//pendingg state
        $.ajax({
            url: 'https://fakestoreapi.com/products',
            type: 'GET',
            success: function (data) {
              fullfilled(data);//success state
            },
            error:function(err){
              rejected(err);//failure state
        
            }
        });
    })
    return apiResponse;
  }

//after clicking button MyPromice() will called and then we get results
  $('#btn').click(function () {
   MyPromise()
      .then(function (data) {
        console.log('success is -',data);
      })
      .catch(function (err) {
        console.log('error is -',err);
      });
  });


//Q.8. Create examples to explain async await function

//async and await makes our code asynchronous.these are like syntactical sugar for promises.async always goes with the function.await is only
//valid inside the async function.async makes a function return a promise while await makes a function wait for a promise.

 //FETCHING DATA WITH AJAX AND CHECKING SUCCES BY PROMISE
 function AjaxPromise() {
    const apiResponse = new Promise(function (fullfilled, rejected) {//PROMISE
      $.ajax({//AJAX
        url: 'https://fakestoreapi.com/products',
        type: 'GET',
        success: function (data) {
          fullfilled(data);//RESOLVE
        },
  
        error: function (err) {
          rejected(err);//REJECT
        },
      });
    });
  
    return apiResponse;
  }

  //asynch and await-and try and catch method also-
  async function foo3() {
    try {
      const result = await AjaxPromise();//it will wait untill ajaxpromise function runs
      console.log('from the async await', result);
    } 
    catch (err) {
        console.log('error-',err);
    }
  }

//after clicking button foo3 will called and then ajaxpromise()
  $('#btn2').click(function () {
    foo3();
 });
  

//Q.9. Create examples to explain promise.all function

let p1 = new Promise(function(resolve,reject){
    console.log('first promise');
    resolve('first p1');
});

let p2 = new Promise(function(resolve,reject){
    console.log('second promise');
    resolve('second p2');
});

Promise.all([p1,p2]).then((data)=>console.log(data)).catch((err)=>console.log(err))


