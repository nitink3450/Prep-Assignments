//DAY1=

//Q.1.What is Javascript?
//................................................
//Javascript is a combination of both compiler and interpreter and it works on the concept of JIT (Just in time compilation).
// In this the whole code gets compiled in one single shot and then directly it goes for execution , no file gets generated.
// Javascript is a -
// 1.  Synchronous lanaguage means the complete code will be executed line by line
// 2.  Single Threaded language means once the error occurs then the execution will stop at that line itself.
// 3.  Dynamic Programming Language means when you are creating a variable and assigning it some value then this value type can be changed throughout the whole code execution which is not applicable in other programming languages.

//Q.2.what is the javascript run time environment?
//................................................
// A runtime environment is where your program will be executed.
//It determines what global objects your program can access and it can also impact how it runs.
//it has two JavaScript runtime environments:
// 1.the runtime environment of a browser (like Chrome, or Firefox)
// 2.the Node runtime environment

//Q.3. what is execution context?
//................................................
// -The browser's JavaScript engine then creates a special environment to handle the transformation
//  and execution of this JavaScript code. This environment is known as the Execution Context.
// -The Execution Context contains the code that's currently running,
//  and everything that aids in its execution.
// -During the Execution Context run-time, the specific code gets parsed by a parser,
//  the variables and functions are stored in memory, executable byte-code gets generated,
//  and the code gets executed.
// -There are two kinds of Execution Context in JavaScript:
//             1.Global Execution Context (GEC)
//             2.Function Execution Context (FEC)

//Q.4.what is javascript Engine?
//................................................
// JS engine is a program which gets used to execute the JS code.
// All the browsers have their own JS engine. But out of all the most famous one is V8 engine provided by Google chrome.
// Internet Explorer has Chakra Mozilla Firefox has Spider Monkey
// Every code that has to be executed firstly gets converted into machine level language which is a combination of 0 and 1.
// This code is understandable by machine and then it finally gets executed.
// Now this complete process is known as compilation and it can be done by either compiler or interpreter.
// In case of compiler the complete code gets converted into machine level in a single shot and it creates a file which finally gets used in execution.
// whereas in case of interpreter the code gets converted into machine level line by line and it does not create any file.

//Q.5.flow of data in engine?
//................................................
// there are 4 levels in engine to flow our data in browser:
//1.PARSER ,
//2.AST(Abstract Syntax Tree),
//3.COMPILER,
//4.EXECUTION.

//When we run our js code in browser(chrome) runtime environment means in js engine(v8 engine)
//first it will pass through a parser,parser checks that if our code syntax,if any syntax error found it will throw an error to browser and returns our code back.
//if syntax is good then it will tranfered/passed to AST(Abstract Syntax Tree).
//AST it creates the tree structure like tokens like variabledeclarations, identifires, literals etc.
//then our code is passed to the Compiler,compiler converts our whole code into the macchine level language.
//then it passed for the Execution process after execution output will display on the console or on webpage.
