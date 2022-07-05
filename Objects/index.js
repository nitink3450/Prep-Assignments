//Q.1.Create a Function
//   Complete the function in the editor. In which you are given one object as a parameter,
//   in that object, there is a data member named name. Your task is to create a method
//   inside this object named setter, such that this method will print the value of the data member named as name 



// //Q.2.Delete a Parameter 
// Complete the function in the editor. You have an object as a parameter. In which you have to 
// delete the rollno property from the object and return the object.
function Check1(obj2) {
    delete obj2.rollno;
    console.log(obj2);
    
}
Check1({rollno : '2',id : '3'})

//Q.3.Check whether the Package is Dream Package or not
// Complete the function in the editor. In which you are given an object as a parameter.
// In that object, there is one property named as salary if the salary is maximum than 
// 5 lakh then return "Dream" otherwise  return "NotDream".

function Check2(obj3) {
  if (obj3.salary > 500000){
    console.log('Dream');
  }
  else{
    console.log('NotDream');
  }
}
Check2({salary : '100000'})

//Q.4.Check whether the Object has a parameter or not
// Complete the function in the editor. In which you are given an object as a parameter. You 
// have to return "false" if there is no parameter in the object otherwise return "true".

function Check3(obj4) {
console.log(((Object.entries(obj4)).length === 0) ? 'false' : 'true' )
}
Check3({nitin : 'hello'})

//Q.5.Merge the Objects
// Complete the function in the editor. In which you are given two objects as a parameter.
// In which you have to merge two objects and return a single object.

function Check4(obj5,obj6) {
   
    let result=Object.assign(obj5,obj6);
    console.log(result);
}
Check4({a:'1',b:'2'}, {b:'4',c:'5'})

//Q.6.Object Multiplyer
    // Complete the function in the editor. In which you are given an object and a
    //  digit N as a parameter.In the object there are two variable id and houseno are defined
    //   as a data member. You have to multiply both the data members with a given digit N.

function Check5(a,obj7) {
  obj7.id *= a;
  obj7.houseno *= a;
  console.log(obj7);
  }
  Check5(2,{id:12,houseno:10})

//Q.7.Find the  sum of Object Members
// You are given a function Check which takes an object Obj as a parameter.
// Your taks is to find out the sum of the three data members of the object.
//  The data members are named as p1, p2, p3.

function Check6(obj8) {
  console.log(obj8.p1 + obj8.p2 + obj8.p3);
 }
 Check6({p1:1,p2:2,p3:3})
 
//Q.8.Check whether the Objects are same or not.
// Complete the function in the editor. In which you are given an object as a parameter. That object contains two variables name and id.
// Your task is to compare the object name and id to the new_name and new_id given there as a parameter.
// Return "true" if new_name and id are same as objects name and id otherwise return  "false".

function check7(obj9,a,b) {
    console.log((obj9.name === a) && (obj9.id === b) ? 'true':'false');
}
check7({name :'nitin',id:10},'vishal',2);