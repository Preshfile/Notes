//Escaping Literal Quotes in strings
//sometimes your string contains quotes

//var comment = "The woman said "Life is for the living""; //JavaScript cant't interpret this correctly 
                                                        //because it cant't determine the end of the string.
                                                        //To solve this, we use escape character - the back slash \
                                                        //with this JavaScript no longer interprets any character after it as the end of the string
comment = "The woman said \"Life is for the living\"";

//another method of doing this is having your string start with single quote while the quote double or vice versa

comment = 'The woman said "Life is for the living"';

//escape sequences in string
/*The list of things you can escape with a back slash are:
- single quote  - \'
- double quote - \"
- backslash - \\
- newline - \n
- carriage return \r
- tab - \t
- backspace - \b
- form feed - \f
*/

var multiLineString = "I am happy\n\t\\Second line\nThird line";

//concatenating strings with plus (+) operator
var completeName = "Oluchi" + "Ndu";
var declare = "Here is the first" + "Here is the second"; //Now add "and in-between them"

//adding space between concatenated strings
var tell = "The is is the first " + "and this is the last."

//Concatenating strings with += operator
var callMe = "Eberechi";
callMe += " Chizoba";

var sure = "We are good";
sure += "together";

//Constructing strings with variables - You can concatenate strings together with variables
var callUs = "Bigstrut Technology";
var meetUs = "My name is Jada Ifechi. I am from " + callUs;

var moment = "I Set my eyes on you";
var confession = "At that very moment " + moment + " I knew you would be a Dev."

//console.log(confession);

//Appending variables to strings - you can append variables to string with the += operator
var nameState = "Matter";
var define = "is anything that has weight and occupies space";

nameState += define;
//console.log(nameState);


/*finding the length of string
    - in JavaScript, we use the .length property to find the length of string
*/

var myOwnName = "Vincent";
var lengthOfMyName; //what data type will be the result of the output?

lengthOfMyName = myOwnName.length;
//console.log(lengthOfMyName);

var myFullName = "Mmiliaku Olamma";
var myFullNameLength;

myFullNameLength = myFullName.length;
//console.log(myFullNameLength);

/*Bracket notation to find first character in string
- Bracket notation is a way to get a character at a specific index within a string 
*/

var getTheFirstCharacter = "Welcome"[0]; //in programming, we being count from zero - this is called zero-based indexing
//console.log(getTheFirstCharacter);

var goodLife = "Health is wealth"
var getTheFifthCharacter = goodLife[7];
//console.log(getTheFifthCharacter);

var firstNameFam = "Sabinus"
var familyName = " Obike";
var fullFamilyName = firstNameFam + familyName[0]; //what would i get here?



var letter = fullFamilyName[0]; 
//console.log(letter); //and what would i get here?

/* String Immutability
    - strings are immutable, meaning they cannot be altered once created
    - this does not mean they cannot be changed
    -it's just that the individual characters of a string literal cannot be changed
*/
familyName[0] = "A"; //can't alter the individual characters

familyName = "Ebube"; //but can change the whole string
//console.log(familyName);

