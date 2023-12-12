
/*comparison and logical operators in JavaScript

   A) Comparison operators include:
    - Equality operator (==) and (===) - checks for strict equality
    - Inequality operator (!=) and (!===) - checks for strict inequality
    - Relational operators ("<", ">", "<=", ">=",)

    B) Logical Operators
    - Logical AND (&&) //checking if both conditions are true
    - Logical OR (||) //checking if one condition is true
    - Logical NOT (!) //checking for the opposite of a condition

    Note - whenever you use comparison or logical operators, 
    what is returned is usually a  boolean. in other words, 
    the result is usually a boolean value.
*/

/*XXXX - booleans with comparison operators
        -  only returns either of these two values - true or false
*/
var firstScore = 900;
var secondScore = 200;
var thirdScore = 900;

function compareScores() {
  //equality check
  //return firstScore == secondScore;
  //strict equality check
  //return firstScore === thirdScore;
  //inequalityCheck
  //return firstScore != secondScore;
  //relation check
  //return secondScore > firstScore;
  //return firstScore >= thirdScore;
  //return  thirdScore < firstScore;
  //return firstScore <= thirdScore;
  //logical check
  //return (secondScore > firstScore) && (firstScore == thirdScore);
  //return (secondScore > firstScore) || (firstScore == thirdScore);
  //return(!true);
  //return (!false);
}
//console.log(compareScores());

/*comparison with the strict equality operator === (triple equal sign)
  - The difference between equality (==) and strict equality (===) is that
        equality operator (==) attempts to convert both values being compared to a common type
        while strict equality operator (===) does not do type conversion

        (=) - assignment operator 
        (==) - Equality operator 
        (===) - strict Equality operator 
*/

var x = "5";
var y = 5;

//Equality Operator
//explain this
console.log(x == y); //checks if values are equal
console.log(x === y); //hecks if values and types are equal
console.log((x = y));

//and explain this
console.log((x = y));
console.log(x == y);
console.log(x === y);

//explain this
console.log(x != y); //checks if values are equal
console.log(x !== y); //hecks if values and types are equal
console.log((x = y));

//inequality operator - opposite of equality operator
//and explain this
console.log((x = y));
console.log(x != y);
console.log(x !== y);

//Decision making
/*XXXX - The 
    if statements
    else statements
    else if statements

        -  If statement is used to make decision in code
        - The if keyword tells JavaScript to execute the program
                if the condition defined in the parenthesis are met.
        - When if statement is true, the if code block is evaluated
        - But when the if statement is false, the else block is evaluated if available
            if not available, nothing happens.
        - else if is used when you have multiple conditions that should be addressed
        - else if is a way of chaining if statements together
*/

var Apple = "A fruit";
var cucumber = "A vegetable";

if (cucumber == "A fruit") {
  console.log("Yeepee! We have a fruit"); // executes when condition is true
} else {
  console.log("Wrong! That's a vegetable"); //Executes when condition is false
}

var nkScore = 70;
var vicScore = 50;
var totalScore = 200;

function scores() {
  if (nkScore <= totalScore && nkScore < vicScore) {
    console.log("True");
  } else {
    console.log("False");
  }
}

scores();

function equalsTest(myName) {
  if (myName == "Vincent") {
    console.log("True");
  }
  console.log("false");
}
equalsTest("Agness");

function elseifUseCase(num) {
  if (num >= 80 && num <= 100) {
    return 'Excellent!.\n Your grade is "A"';
  } else if (num >= 70 && num <= 79) {
    return 'Very Good!. \n Your grade is "B"';
  } else if (num >= 50 && num <= 69) {
    return 'Good! \n Your grade is "C"';
  } else if (num >= 40 && num <= 49) {
    return 'Fair. \n Your grade is "D"';
  } else {
    return 'Failed. \n Your grade is "F"';
  }
}
console.log(elseifUseCase(40));

/*XXX - Logical order in if else statement
  - when using if else statement, order is very important
      because once the first condition is met, it doesn't check for other conditions
      that's why it's important to think about the order.

*/
//example of a wrong order
function ifElseOrder(num) {
  if (num < 50) {
    return "number is less thn 50";
  } else if (num < 30) {
    return "number is less thn 30";
  } else if (num < 10) {
    return "number is less thn 10";
  }
}
console.log(ifElseOrder(9)); // this is supposed to output "number is less than 10"
//but it will output "number is les than 50"
//Now try ordering it well

/*XXX - chaining if and if else statement

*/
//prompt with nested if(s) - nested ifs are if statements within if statements
//                         - prompt is a way of collecting data from users

//Build a nameAGe Checker
function collectInfo() {
  var myOwnVeryName = prompt("What is your name?", "");

  if (myOwnVeryName === "vincent") {
    var age = prompt("How old are you?", "");
    if (age === "25") {
      return "My name is " + myOwnVeryName + " I am " + age + " years old.";
    } else {
      console.log("your age input is not correct");
    }
  } else {
    return "Wrong name. We want Vincent";
  }
}
//console.log(collectInfo());

/*type conversion - string to integer and float:
    string to integer - use parseInt() function
    string to float - use parsefloat() function
*/

// var numeralA = "50";
// var numeralB = 10;
// var numeralC = 11;

// console.log(numeralA + numeralB);
// console.log(parseInt(numeralA + numeralB));

// console.log(numeralA / numeralC);
// console.log(parseFloat(numeralA / numeralC));

/*Build a simple ATM
  - That can perform a simple withdrawal operation with a valid pin
  - Ensure the user doesn't withdraw more than the user's account balance
  - user should be able to know their available balance
*/
