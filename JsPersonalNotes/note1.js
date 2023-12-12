/*
1)  Javascript Comments 
                    - comments are line(s) of code that JavaScript will ignore
                    - can be used to explain what a line of code or group of code does
        Types of comments
            - Single line or inline comment (with a double slash - //)
            - Multiple line comment (with open and close slash star and ends with a slash star )
*/
/*
2)  Data and Data Types 
            - data is anything that is meaningful to the computer
        Data Types in JavaScript
            Most common ones:
            - Numbers: a number
            - strings: any sort of text
            - boolean: means true or false
            Others:
            - null: means Nothing
            - undefined: Something that hasn't been defined or a variable that hasn't been set to anything yet
            - symbol: an immutable primitive value that is unique
            - object: stores key value pairs          
*/
/*
3) Variables 
            - are like containers with which the computer stores and manipulate data.
            There are three Ways to declare a variable in JavaScript:
            a) The var keyword: var stands for variable
            b) the let
            c) const
*/

//variable declaration

//var - can be used throughout your whole program
var myName = "Andy";
var myName = 8;

//You end all lines in JavaScript with a semi-colon (;)

//let - can only be used within the scope it was declared
let herName = "Oluchi";

//const - used to declare variables that can never change
const pi = 3.14;
// const pi = 235; - you will get an exception or an error that you cannot redeclare the variable

//Difference between  declaring variables and assigning variables

var a; //a variable called 'a' is declared
console.log(a);
var b = 2; //declaring a variable called 'b' is declare and assigned '2'
//using the assignment operator (=)
a = 7; //now 'a' is assigned '7' because it has already been declared
b = a;

console.log(b); //console.log allows you to see things in the console

var c = "Uju"; //declaring and initializing a variable at the same time

//Javasccrip cannot access a variable before initialization, it works it's way from top t bottom
console.log(userNum); //this will throw a reference error
var userNum = 5;
//class work
/*
initialize these three variables. the variable type of the first two should be number and the third a string
var a;
var b;
var c;

what would we see in the console if we log
a = a + 2;
b = b + 5;
c = c + "Uju";
*/

//Case sensitivity in variables - JavaScript is case sensitive
var StudG = "Masscom";
var studG = "comMass";
var Studg = "MasCamp";

//letters are the same but capitalization aren't the same
console.log(studg); //what will be the output. it will output an error because it has not been declared

//in JavaScript, it is a generally common practice to use camelCase
var victoryGirl = "Salome"; //first letter is lowercase and other new section of words begin with uppercase

//Mathematical operations in JavaScript - Addition, multiplication, subtraction, division
//modulus

var firstNum = 30;
var secondNum = 5;
var modulResult = firstNum % secondNum;

console.log(modulResult);

/*class work
   - create two variables called myRealAge and myBroAge
   - multiply the two together and the store result in siblingsAge
   - log siblingsAge to the console.   

*/

//increment - means to add one
var numfirst = 10;
var increaseNumByOne = numfirst + 1; // or
numfirst++;

//decrement - means to subtract one
numfirst--; //minus 1;

//Mathematical operations with floating point numbers
//decimal or floating point numbers - float;
var myDecimal = 0.5 * 0.5;
console.log(myDecimal);

//add, subtract, multiply, division, modulus (a.k.a the remainder operator) ...

//compound Assignment with Augmented Addition i.e the += operator
var a = 50;
var b = 100;
var c = 200;

a += 200; // same thing as a = a + 200 - adding and as well assigning the result to the variable
b = 50 + b; // shorten this and the next with the compound assignment +=
c = c + 80;

//compound Assignment with Augmented Subtraction i.e the -= operator
var e = 50;
var f = 100;
var g = 200;

e -= 200; // same thing as e = e - 200 - subtracting and as well assigning the result to the variable
f = 50 - b; // shorten this and the next with the compound assignment +=
g = c - 80;

//compound Assignment with Augmented Multiplication i.e the -= operator
var h = 50;
var i = 100;
var k = 200;

h *= 200; // same thing as h = h * 200 - Multiplying as well assigning the result to the variable
i = 50 * b; // shorten this and the next with the compound assignment *=
k = c * 80;

//compound Assignment with Augmented Division i.e the /= operator
var l = 50;
var m = 100;
var n = 200;

l *= 200; // same thing as l = l / 200 - Dividing as well assigning the result to the variable
m = 50 / b; // shorten this and the next with the compound assignment *=
n = c / 80;

//Declaring Strings - Any character surrounded by Quotation marks (single or double) or back ticks is a string
var firstName = "Ely";
var lastName = "Joel"; //This is how you create a string in JavaScript



