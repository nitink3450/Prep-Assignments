let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ];


// Q.1: We are interested in retrieving only the name of the students and all the names should be in caps.['JOHN', 'BABA', 'YAGA', 'WICK']
          
let Names=studentRecords.map((ele)=>{
    return ele.name;
})
console.log(Names);

// Q.2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]
let data=studentRecords.filter((ele)=>{
    return ele.marks>50;
})
console.log(data);
// Q.3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.
let details=studentRecords.filter((ele)=>{
    return (ele.marks>50 && ele.id>120);
})
console.log(details)

// Q.4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.
let totalSum=studentRecords.reduce((sum,ele)=>{
    sum=sum+ele.marks;
    return sum;
},0)
console.log(totalSum)

// Q.5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let studentNames=[];
let result5=studentRecords.map((ele)=>{

    if(ele.marks>50){
    studentNames.push(ele.name);
    }
})
console.log(studentNames);

// Q.6: This time we are required to print the sum of marks of the students with id > 120.
let sumMarks=studentRecords.reduce((result,ele)=>{
    if(ele.id>120){
        result +=ele.marks;
    }
    return result;
},0)
console.log(sumMarks)

// Q.7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.
let newar=[];
studentRecords.map((ele) =>{
    if(ele.marks < 50){newar.push(ele.marks + 15)}  
});
studentRecords.filter((ele) => {
    if(ele.marks > 50){newar.push(ele.marks)}
});
let Total = newar.reduce((sum,ele)=>{
    if(ele > 50){
        sum+=ele;
    }
    return sum;
   
},0)
console.log(Total);

//Q.8: Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 
let ArrayofObjects=[
    {name:'Nitin',class:'A',roll:123},
    {name:'vishal',class:'B',roll:124},
    {name:'ankush',class:'C',roll:125},
    {name:'rahul',class:'D',roll:126},
    {name:'amar',class:'E',roll:127},
    {name:'mahesh',class:'F',roll:128},
]