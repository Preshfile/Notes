/*Class work
    - Write and print the following message to the console
    1) Ada's best friend\colleague came over the house yesterday.
    2) "living a lif of solitude can be rewarding" Isioma said

    - break the following sentences into three lines
     3) I am a living witness to the saying: "hard work Pays". You though need to work smart. Alo be consistent.

    find the length of each of the three sentences
    find the character at the index of 10 in the above single sentence */

    
    /*String immutability 

        - strings can be changed when created, 
          but the individual characters cannot be altered once created
    */

    var myString = "Hello!";
    myString[0] = "A"; //cannot change because it is immutable
    //console.log(myString);

    myString = "Hello World!" //but can change the entire string

    //XXXX - Bracket Notation to find the last character in string
    /*
        You can use bracket notation to get any character position in a string
         While to get the last letter in a string, you need to get the length then -1
    */
//Examples:
var expression = "concatenation";
var getTheLastLetter = expression[expression.length -1]; //meaning the character at the position of the length minus 1 - output character
//var getTheLastLetter = expression.length -1; //while this means the index of the last character - output number

//console.log(getTheLastLetter);
    //XXXXXXXX - Print to the console the last letter of the string - "i love programming"


/*XXX - Bracket Notation to find the Nth-to-last character in string
    - you can use the bracket notation to find characters from any position in a string
*/
//Examples:
 var speech = "Good Communication";
 var getThirdToLast = speech[speech.length -3];//get the letter at the third to the last position
 console.log(getThirdToLast);

 /*Word 
    Let's use our knowledge of string to build a Word Game
    - In this game, you're provided sentences with some missing words like:
    noun, verbs, adjectives, and adverbs to fill in the missing pieces
    with words of your choice to make a sentence of your choice that hopefully makes sense
 */
//xxxxx - Assignment
/* function myWordGame(myAdjective, myNoun, myVerb, myAdverb) {
   var sentence = " ";
//  Write your code here
   return sentence;
 }
*/
//console.log(myWordGame("good", "boy", "ran", "gently" ) );//we can pass in different words here

// console.log(myWordGame("happy", "man", "stroll", "tiredly"));

/*XXXX - Array
    - Arrays allows for the Storage of Multiple Values or data at once
    - An array always starts with a square bracket and ends with a square bracket
        to show he beginning and the end of the array.
    - Every element or item in the array is separated by a comma 
    - Elements or items in an array can be of any data type.
*/
var myArray = []; //this is an empty array.
var myNonEmptyArray = ["Chinelo", 28]; //XXXXX - so, what data types do we have here?

/*XXXX -  Nested Arrays
    - When one of the elements in an array is another array,
        we call it a nested array or a multidimensional array.
*/
 var ourMultiArray = [['Victor', 1], ["Andrew", 2]]; //two arrays inside an array

 /*XXXX - Access Array Data with Indexes
    - This can also be done using the bracket notation
 */
//Examples

var myNumbers = [20, 40, 60];
var getTheFirstElement = myNumbers[0];//gets the first element in the array
console.log(getTheFirstElement);

var getTheFirstElement = myNumbers[1]; //gets the second element in the array
console.log(getTheFirstElement);

/*XXXX - Modify Array Data or element with indexes
    -   You can use array indexes to modify arrays, but you can't so that with strings
*/
//Examples:

var myCollection = [200, 500, 800, 1000];
myCollection[2] = 6000;

console.log(myCollection);

/*XXXX - Accessing multi-dimensional array with indexes
    -   You can also use bracket notation to modify items in a multi-dimensional arrays (array of arrays)
    -   To achieve this, we use a double bracket notation e.g [][]
*/
//Examples:

var myMultiCollections = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]];
var getItemInCollection = myMultiCollections[0][3] //will get the item with the index of 3 in the collection with index 0
console.log(getItemInCollection);
/*How do we get the following:
    - no. 7 in the array
    - no. 16 in the array
    - first number in the 3rd array
    - no. 11 in the array and
    - the the last number in the array with index 1
*/

