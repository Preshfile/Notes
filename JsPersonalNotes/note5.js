/* xxxxx - Functions
    - Functions allow us to create reusable code in JavaScript
    - Function is created with: 
        the word function (i.e function)
        function name (i.e myLogin)
        open and close parentheses (i.e ()- this can hold parameters)
        and then the open and close curly brackets (i.e {})
*/

function myMultiplication() {
  console.log("Welcome to function tutorial");
}

// myMultiplication(); // everything inside the curly bracket is run any time the function is called or invoked
//Whenever myMultiplication() function is called, its content - "welcome to Function tutorial" gets executed

// myMultiplication();
// myMultiplication();
// myMultiplication();

function greeting() {
  console.log("Welcome home");
}
//greeting();

/*xxxxx Functions with parameters
    - Passing Values to functions with arguments (parameters)
    -   Parameters are variables that act as place holders 
        for the values that are to be input to a function when called. 
*/

function add(num1, num2) {
  console.log(num1 + num2);
}

//add(90, 20);

/*For functions with parameters:
    whenever the function is called, we must pass in values 
    in place of the parameters which act as place holder for the values.
    */

function fullName(firstname, lastName) {
  console.log(firstname + " " + lastName);
}
//fullName("Nkechi", "Okoro");

//XXX - Global Variables

/*xxxx - Global Scope and Function
    -   Scope refers to the visibility of variables
    -   Variables defines outside of a function have global scope
    -   Global scope means they can be seen and accessed everywhere in your code
   */
var myGlobal; //global variable accessible by all

function assignGlobal() {
  myGlobal = 400;
  console.log(myGlobal);
}
//assignGlobal();

function assignGlobal2(para1, para2) {
  myGlobal = 400;
  console.log(
    para1 + " scored " + myGlobal + " and " + para2 + " scored " + myGlobal
  );
}
//assignGlobal2("Uju", "Ada");

function scopedVar() {
  var age; //this variable is scoped only inside this function,
  //can't be accessed by another due to the var keyword
  //without the var keyword, it automatically becomes a global variable
}

//XXX 
/*xxxx -  Local Scope and Function
    - variables declared within a function or as the function's parameters, have local scope
    - such variables are only visible within the function they are created 
  */

function myLocalVar() {
  var firstLocal = "I am a local variable";
  console.log(firstLocal);
}

//myLocalVar();

//console.log(firstLocal); // undefined - variable not recognized outside it's local scope

/*XXXX - Global versus Local Scope in functions
        -   It is possible to have both the global and local variables 
            with the same name
        - In such situation, the local variable takes precedence over the global variable
    */
var foodMade = "Egusi";

function myKitchen() {
  var foodMade = "Onugbu";
  return foodMade;
}

//console.log(myKitchen());
//console.log(foodMade);

/*XXXX - Return a value from a function with return
        -  You an return a value from a function with a return statement
    */

function myValue(firstValue) {
  return firstValue - 20 ;
}

//console.log(myValue(128));

function multiply2Numbers() {
    var firstVal = 50;
    var secondVal = 10;
   return firstVal * secondVal;
}

//console.log(multiply2Numbers());

/*XXXX - Understanding undefined value  returned from a function
        -  it's not compulsary for a function to have a return statement
        - functions that return nothing will be undefined
    */
var firstPay = 520000;
function salary() {
  firstPay *= 2;
}

//console.log(salary());

/*XXXX - Assignment with a returned value
        -  you can assign a returned value to a variable
        - 
    */

var mathResult = 0;

function mathProcess(num){
    return(num * 2)/ 4;
}

mathResult = mathProcess(30);

//console.log(mathResult);

/*Word 
    Let's use our knowledge of string to build a Word Game
    - In this game, you're provided sentences with some missing words like:
    noun, verbs, adjectives, and adverbs to fill in the missing pieces
    with words of your choice to make a sentence of your choice that hopefully makes sense
 */
/*
function myWordGame(myAdjective, myNoun, myVerb, myAdverb) {
   var sentence = " ";
   
   return sentence;
 }
*/
//console.log(myWordGame("good", "boy", "ran", "gently" ) );//we can pass in different words here

// console.log(myWordGame("happy", "man", "stroll", "tiredly"));
