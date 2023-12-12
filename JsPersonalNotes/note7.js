/*XXX - Switch Statement
    - instead of using chained else if statements, you can use switch statement
    - a switch statement can have many case statements that test a value 
    - the default statement in a switch statement is like an else statement in an if statement
*/

/*write a switch statement that tests a value bases on the following conditions:
    1 for "Alpha"
    2 for "betta"
    3 for "Gammer"
    4 for "Delta"
*/

switchTest = (val) => {
  result = "";
  switch (val) {
    case 1:
      result = "Alpha";
      break;
    case 2:
      result = "Beta";
      break;
    case 3:
      result = "Gamma";
      break;
    case 4:
      result = "Delta";
      break;
    default:
      result = "No idea";
      break;
  }

  return result;
};
//console.log(switchTest(0));

/*Multiple Identical options in switch statements
    - sometimes you want to switch statement where multiple inputs
        give the same output
    - this can be achieved by omitting the break in between the identical cases
*/

gradeResult = (grade) => {
  var decision = "";
  uppercaseGrade = grade.toUpperCase();

  switch (uppercaseGrade) {
    case "A":
    case "AB":
      decision = "Excellent score, Promoted";
      break;
    case "B":
    case "BC":
      decision = "Very Good score, Promoted";
      break;
    case "C":
    case "CD":
      decision = "Good score, Promoted";
      break;
    case "D":
    case "DF":
    case "F":
      decision = "Fair score, on probation";
      break;
    default:
      decision = "Enter the right input";
      break;
  }
  return decision;
};

//console.log(gradeResult(""));

//Replacing if else chains with switch
//Returning boolean values from function
//returning early pattern from function
//counting cards

/*create a blackjack card counting function
     how it works:
  -  when you see a low card, the count goes up
  -  When you see a high card, the count goes down
  -  When it's a middle value card, the count stays the same
  -  When the count is zero or negative, the player should bet low
*/

var cardCount = 0;

cards = (card) => {

    switch (card) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        cardCount++;
        break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        cardCount--;
        break;
    }

    var hold = "Hold bet";
    if(cardCount > 0){
        hold = "Bet";
    }
   return hold;
}

console.log(cards("A"));