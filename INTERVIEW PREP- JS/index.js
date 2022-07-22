//object-creation
//1st-way = by object literals(simple)
let person = {
    name : 'nitin',
    age : 22,
    lastname:'kanhurkar',
    displayinfo:function (a){
        console.log(person.name);//nitin
        console.log(a);//marry
        return this.lastname;
    }
}
let ab =person.displayinfo('marry');
console.log(ab);//kanhurkar
console.log(person.age);//22
let person1 =Object.create(person);
console.log(person1.age);//22
// console.log(person1.displayinfo());


//2nd-way = by object construcotr-

const car = new Object();
car.name ='audi';
car.color = 'black';
car.info = function(){
    console.log(car.name);//audi
    console.log(this.name);//audi
}
car.info()

//3rd-way = function constructor

function vehicle(model,color){
    this.model = model;
    this.color = color;
}
let car1 = new vehicle('audi','black');
console.log(car1);
let car2 = new vehicle('benz','white');
console.log(car2);

console.log('.........proto.............');
//prototype=

// creating an object constructor
function Student(name,age){
    this.name = name;
    this.age = age;
}
//creating an object of type student
let student1 = new Student('John',32)
let student2 = new Student('Mary',32)

console.log(student1);//Student {name: 'John', age: 32}
console.log(student2);//Student {name: 'Mary', age: 32}

//adding property to student1 instance dynamically
student1.sports = 'Cricket';
console.log(student1);//Student {name: 'John', age: 32, sports: 'Cricket'}

//adding property to the prototype of the Student
//this would add the gender property to all the 
//existing object instance of the Student object 
//and would initialize it to null
Student.prototype.gender = null;

// although student3 is created with name and age
// initialized but the gender property would also 
//be attached to it and assigned as null because 
//of the above mentioned line of code.
let student3 = new Student('Anna',26)
console.log(student3);//Student {name: 'Anna', age: 26}

console.log(".......................................");
//prototype chaining=

function Person111() {
    this.name = 'John'
}

// adding property 
Person111.prototype.name = 'Peter';
Person111.prototype.age = 23;
Person111.__proto__.color = 'red';
Person111.__proto__.pic = 'any';

const person11 = new Person111();

console.log(person11.name); // John
console.log(person11.age); // 23
console.log(person11); //Person111 {name: 'John'}
console.log(person11.__proto__.color); // undefined
console.log(Person111.pic); // any


//inhertance=


    function Employee(name, age, gender, id) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.id = id;
        this.my=400;
    };

    function Developer(name, age, gender, id, specialization) {

        // Calling Employee constructor function
        Employee.call(this, name, age, gender, id);
        // Adding a new parameter
        this.specialization = specialization;
        // console.log(this);//developer
    }

    // Creating objects
    let Employee1 = new Employee("Suraj", 28, "Male", 564);
    let Developer1 = new Developer("Karishma", 31, "Female", 345,
        "Frontend Developer");
    console.log(Employee1);
    console.log(Developer1);
    let dev2 = new Developer();
    console.log(dev2);

