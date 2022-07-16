//INHERITANCE AND PROTOTYPE(CHAINING)-

//prototype means ur making a paiting of picture so u will paint all that 
//have in that picture and also u can add/modify some additional properties 
//or something else.

//if we dont us the object.create method to create new obj(e.g. j) then
// new obj(j) created willl inherited the property of main god object.

//creating grandfather object-
const grandfather={
    property:"2acre land",
    villa:"in gurgaon",
    //function in object
    getProperty:function(){
      return this.property;
    }
  }

  console.log(grandfather.getProperty());//2 acre//returned function
  console.log(grandfather.property);//2 acre
  console.log(grandfather.villa);//2 acre

  //creating father obj using object.create method-(from grandfather object)
  const father=Object.create(grandfather);  // it inherits the properties of existing to the new object

  father.getProperty=function(){
    return "Fathers property";
  }

  console.log(father.getProperty());//Fathers property
  // console.log(father.getProperty());//if father does not contain it then it will access this granfather property and outpup will be=2acre land
  
  //creating son object from father but it will inherite both father and grandfather properties.
  const son=Object.create(father);

  son.getProperty=function(){
    return "Son's property";
  }
  console.log(son.getProperty());//Son's property


  //#PROTOTYPE CHAINNING-(bottom to top)
  //Prototype chaining is used to build new types of objects based on existing ones.
  // It is similar to inheritance in a class based language.
  
  //it always look for properties from BOTTOM TO TOP if found then it will print instanstly.
  //if we want to print the propert of the son then browser first will check that if the son has that property or not if  yes then it will print it.
  //if not it will go top to there parent(father).if father has it.then it will print if not it will look for fathers parent(grandfather).if it has it it will print if not
  //it will look for lastly that GOD obj which is pre-exists already on browser.and if it has it that property it will print it if not then lastly it will throw an new error.
  //that called prototype chaining.

