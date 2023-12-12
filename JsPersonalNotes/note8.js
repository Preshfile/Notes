/*XXX - JavaSCript Object
    - Objects are similar to arrays except
    - instead of using indices to access data, we use properties
    - Objects are defined using curly braces {}. 
    - They are key-value pairs where keys are strings or symbols, 
    - and values can be of any data type, including other objects.
    - Everything before the colons are properties
    - Everything after the colons are values
    - properties and values can be any data type in JavaScript
*/

var car = {
  Name: "Toyota",
  Mode: " GR Supra",
  Color: "Yellow",
  Tyres: 4,
  Speed: "155 mph",
};

var Nnenna = {
  name: "Nnenna",
  age: 28,
  height: 150,
  weight: 60,
  occupation: "Nurse",
  friends: ["Ijeoma", "Nkechi", "Agnes", "Genesis"],
};

/*XXX - Accessing object properties
    - There are two main ways to access a property on an object:
    1) - dot notation
    2) - bracket notation
*/
//Accessing object properties with dot notation

var getPropertyValue1 = Nnenna.name;
var getPropertyValue2 = Nnenna.age;
var getPropertyValue3 = Nnenna.height;
var getPropertyValue4 = Nnenna.friends;
// console.log(getPropertyValue1);
// console.log(getPropertyValue2);
// console.log(getPropertyValue3);
// console.log(getPropertyValue4);

/* Accessing object properties with bracket notation
    - bracket notation is used to get the value of properties with spaces in their names
    - the spaced names are usually enclosed in quotation marks
*/

var studentInfo = {
  "first name": "Precious",
  "last name": "Uju",
  "study year": 4,
  "grad year": 2023,
};

var getInfo = studentInfo["first name"];
//console.log(getInfo);
var getInfo1 = studentInfo["last name"];
//console.log(getInfo1);
var getInfo2 = studentInfo["grad year"];
//console.log(getInfo2);

/* Accessing object properties with variables
    - bracket notations can also be used to look up properties using variables
*/

var sittingPosition = {
  1: "Angel",
  12: "Lucy",
  30: "Julius",
  14: "Annie",
  2: "Emilia",
};

var studSitPosition = 1; //change this value to any of the properties
//in the object sittingPosition and get its corresponding value
var getStudSitPosition = sittingPosition[studSitPosition];

//console.log(getStudSitPosition);

/* Updating (changing) or setting an object property to a new value with:
    - dot notation
*/

var rollCall = {
  1: "employee",
  name: "Bisi",
  age: 28,
  4: "Ola",
  5: "Mary",
  friends: ["Ekene", "Andy", "Kenny", "Ndidi"],
};

rollCall.name = "Cynthia";
//console.log(rollCall.name);

rollCall.friends = ["julius", "Agu"];
//console.log(rollCall.friends);

rollCall[1] = "Staff"; //use square brackets for numeric key
//console.log(rollCall[1]);

/* Adding new properties to an object with:
    - dot notation
    - bracket notation
*/

var birds = {
  name: "Parrot",
  wings: "Yes",
  eyes: 2,
  legs: 2,
  Feathers: "yes",
};
birds.age = 2;
birds.fan = ["ugochi", "Oluchi", "Eze", "Mirabel"];
birds["home"] = "Africa";

/* Deleting properties from an object with:
    - the delete keyword
*/
delete birds.Feathers;
//console.log(birds.Feathers); //undefined being deleted

/*XXX - Using object for lookups
    - Objects can be thought of as a key, value storage like a dictionary
    - You can use an object to lookup values
*/

objectLookupTest = (val) => {
  result = "";
  var lookup = {
    alpha: "Loren",
    bravo: "Andrew",
    charlie: "Mary",
    delta: "Ife",
    eco: "Tracy",
  };
  result = lookup[val];

  return result;
};
//console.log(objectLookupTest("bravo"));

/*XXX - Testing objects for properties
    - You can check if an object has a property with
        the hasOwnProperty method
*/

var myPets = {
  1: "Sona",
  2: "Martin",
  3: "Greg",
  4: "Ulanda",
};

const checkObjectProperty = function (check) {
  if (myPets.hasOwnProperty(check)) {
    return myPets[check];
  } else {
    return "Not found";
  }
};
// console.log(checkObjectProperty(1));
// console.log(checkObjectProperty(4));
// console.log(checkObjectProperty("Hi"));//not found

/* Manipulating complex objects

    - JavaScript object is a way to store flexible data
    - you can store strings, numbers, arrays and even other objects
*/

//creating an array of objects
//Inside the array are key value pairs which are synonymous to JSON
var myMovie = [
  {
    title: "End Of Road",
    producer: "Eleonu",
    production: "Dream House Entertainment",
    formats: ["MP4", "AVI", "Youtube", "WMV"],
    Release_year: 1999,
  }, //since it is an array, after each element in an array, a comma is needed
  //adding another object
  {
    title: "Blue Vile",
    producer: "Chikwendu",
    production: "Lonely Road Entertainment",
    formats: ["AVI", "WebM", "MP4"],
    Release_year: 2005,
  },
];
/* -   the above, created objects in an array and
   -   each object holds properties and values (data) which is the key value format
   -   The key value format is very similar to JSON
*/
//console.log(myMovie[[0]]); //getting the first object in the array

//console.log(myMovie[1]); //getting the second object in the array

//var firstObject = myMovie[0];   //accessing the first object
//console.log(firstObject.title); //accessing values of the first object

var secondObject = myMovie[1]; //accessing the second object
//console.log(secondObject.title); //accessing values of the second object

// Accessing Nested objects

var estate = {
  myHouse: {
    exterior: {
      floor: "tiled",
      fence: "bricks",
      gate: "iron",
      roof: "aluminum",
      color: "white",
      type: "duplex",
      "overall rating": 4,
    },
    interior: {
      sofa: "leather",
      table: "glass",
      floor: "marble",
      roof: "PVC",
      windows: "glass",
      doors: "wood",
      "overall rating": 5,
    },
  },
};

//tips:
//tips - to access sub-properties of an object, chain together the dot or bracket notation

var getFloorExterior = estate.myHouse.exterior.floor;
//console.log(getFloorExterior);

getFloorInExterior = estate.myHouse.exterior["overall rating"];
//console.log(getFloorExterior);

var getFloorInterior = estate.myHouse.interior.windows;
//console.log(getFloorInterior);

getFloorInterior = estate.myHouse.interior.floor;
//console.log(getFloorInterior);

/*tips:
    - In JavaScript, keys in an object can be written without quotes 
        as long as they follow the rules for valid identifier names.
    - Using quotes around the keys is optional 

    Using quotes can be necessary in certain situations:
    - When the key contains characters that are not valid in an identifier.
    - When the key is a reserved word in JavaScript.
    - Many developers choose not to use quotes for simple keys 
        when they follow the rules for valid identifiers, 
        as it can lead to cleaner and more concise code.
*/

// Accessing Nested arrays
var estate2 = [
  {
    view: "exterior",
    list: ["fence", "gate", "roof", "color", "type"]
  },
  {
    view: "interior",
    list: ["leather", "glass", "marble", "PVC", "glass", "wood", 5]
  },
];
 var interior = estate2[1];
 console.log(interior);
 
 var getValue = interior.list[2]; //get the third list element in the second object
  console.log(getValue);