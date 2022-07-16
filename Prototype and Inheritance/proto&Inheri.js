
//Q.1.Create 2 objects - parent and child. Attach methods to parent and use those methods
//  in child object using parents prototype.
let father={
    hobby:'flower decoration',
    dist : 'pune',

};
let son={
    name :'nitin',
    tal : 'khed'
}
son._proto_=father;
console.log(son._proto_.hobby)//flower decoration
console.log(son.tal)//khed

//Q.2. Write code to explain prototype chaining.

let grandfather={
    Favcolor:'blue',
    car : 'splender',
    Details:function(){
        console.log(`favourite color is ${this.Favcolor} and he has ${this.car}`)//favourite color is blue and he has splender
    }
};
grandfather.Details();

let child={
    sub : 'math',
    place : 'dawadi',
}
child._proto_=grandfather;
console.log(child._proto_.car)//splender
console.log(child._proto_.name)//undefined


//Q.3. Add a method to calculate sum of all elements in Array in array's protype, 
// use that method to calculate sum for multiple arrays.
let arr=[10,20,30,40,50];
let result={
    getSum:function(){
        let sum=arr.reduce((acc,e)=>acc=acc+e,0);
        console.log(sum);//150
    }
}
result.getSum();

//Q.4. Write a JavaScript function to retrieve all the names of object's own and inherited properties.
let obj={
    name:'Naveen Kumar',
    college:'Indian Institute of Information Technology,Kalyani,West Bengal',
    branch:'Computer Science and Engineering'
}
let result2=Object.keys(obj)
let result3=Object.values(obj)
console.log(result2)
console.log(result3)
