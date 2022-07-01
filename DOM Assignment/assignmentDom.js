//Q.1 Write the code to access element which is having id as "text"
const heading = document.getElementById('text');
heading.style.color='green';
heading.style.fontFamily='cursive';
heading.style.fontSize='40px';

//Q.2 Write the code to access element which is having tag as "h1"
const heading2 = document.getElementsByTagName('h1')[0];
heading2.style.color='dodgerblue';
heading2.style.textShadow='3px 3px 5px black';

//Q.3 Write the code to access element which is having class as "box"
const div = document.getElementsByClassName('item')[1];
div.style.color='red';
div.style.backgroundColor='lightgray';
div.style.width='150px';

//Q.4 What’s the difference between window vs document?
/*  #Window object : -It is the top most object and outermost element of the object.

    #Document object : -Each HTML document that gets loaded into a window becomes a document object. 
                       -The document contains the contents of the page. 
                       -Using document object, JavaScript can modify, add and delete the HTML elements, attributes CSS styles in the page

    -The window object represents a window/tab containing a DOM document where as document object is property
     of window object that points to the DOM document loaded in that window.*/

//Q.5 Change the heading from ""Hello"" to ""Hello World"" using DOM functions

const button = document.getElementById('btn1');
button.addEventListener('click',() => {
     const replace = document.getElementById('replace');
     replace.innerText = '"Hello World"';
     button.innerText = 'changed';
})

/*Q.6 Create three cards on HTML page and arrange them using flex property in row or
     horizontal direction and also create button at the bottom named "Change Flex direction".
     When user clicks on this button, the cards arrangement should be changed to vertical 
     direction.*/
     const buttton2 =document.getElementById('btn2');
     buttton2.addEventListener('click',() =>{
          const flex =document.getElementById('container');
          flex.style.flexDirection = "column";
     });

/*Q.7 Add one style attribute and give text color as red and id attribute and give the
     id value as ""heading"" in the above given h1 tag using DOM functions"*/

     const red = document.getElementById('world');
     red.style.color='red';
     red.id = 'heading'

/*Q.8 Create an HTML page having content as Hello world and a button named Replace Text.
     When user will click on this button page content should be changed to "Welcome to Elevation academy"*/

     const button3 = document.getElementById('btn3');
     button3.addEventListener('click',() => {
     const replace = document.getElementById('replace1');
     replace.innerText = '"Welcome to Elevation academy"';
     button3.innerText = 'Replaced';
})

/*Q.9 Write code to implement timer clock using JS -- display HH:MM:SS -- the time should
     keep updating every second*/

function clock(){
    let hh = document.getElementById("hh");
    let mm = document.getElementById("mm");
    let ss = document.getElementById("ss");

    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();

    hh.innerText = hrs;
    mm.innerText = mins;
    ss.innerText = secs;
}
clock();
setInterval(clock,1000);

//Q.10 Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

function getadd()
{
     const year = document.getElementById('selected');
     year.innerHTML=('Selected '+form.picked[form.picked.selectedIndex].value);
}

/*Q.11 Create a form having name ,email, phone no. , birth year 
      Add validations - phone no. should start with 91 , it should be 10 digits
      email should be domain prepbytes.com
      birth year should be > 95 */

function foo(){
 
     //creating form-
     const form = document.createElement('form');
     form.setAttribute('method','get');
     form.setAttribute('action','submit');

     //creating input elements
     //for name-
     const name =document.createElement('input');
     name.setAttribute('name','fname');
     name.setAttribute('type','text');
     name.setAttribute('placeholder','Enter your full name');
     // name.setAttribute('required')
     

     //for phone number-
     const phone =document.createElement('input');
     phone.setAttribute('name','number');
     phone.setAttribute('type','number');
     phone.setAttribute('placeholder','Enter your phone number');
     phone.setAttribute('maxlength','14');
     phone.setAttribute('pattern','[+91][789]{1}[0-9]{9}');
     // name.setAttribute('required')

     //for Email-
     const email =document.createElement('input');
     email.setAttribute('name','email');
     email.setAttribute('type','email');
     email.setAttribute('placeholder','Enter your email');
     email.setAttribute('pattern','[a-zA-Z0-9\-\_\.]+@prepbyte.com');
     // name.setAttribute('required')

      //for DOB-
      const birth =document.createElement('input');
     birth.setAttribute('name','birth');
     birth.setAttribute('type','date');
     birth.setAttribute('placeholder','DD/MM/YYYY');
     birth.setAttribute('min','1995-01-01');
      // name.setAttribute('required')

      //submit button-
      const submit=document.createElement('button');
      submit.setAttribute('type','submit')
      submit.setAttribute('value','submit')
      submit.innerText ='submit';

      //add all child to form-
      form.appendChild(name);
      form.appendChild(phone);
      form.appendChild(email);
      form.appendChild(birth);
      form.appendChild(submit);

      //access div of id form-
      const div = document.getElementById('form');
      //add form to div-
      div.appendChild(form);
}
foo();


