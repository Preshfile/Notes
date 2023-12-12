
//Array Methods

/*xxxx - Manipulating Array with push()
    - You can append data to the end of an array with the push function
*/
var listOfItems = ["onion, sugar, milk"];
listOfItems.push(["milk, beverage"]);
//console.log(listOfItems);

var myItems = ["Books", "Pen", "Ipod"];
myItems.push(["Laptop", "Charger", "Stand"]);
//console.log(myItems);

var multiArray = [["Glory", 23], ["Lukas", 39]];
multiArray.push(["Evelyn", 20]);
//console.log(multiArray);


/*xxxx - Manipulating Array with pop()
    - You can remove an item from an array with the pop() function
*/
var mySerialNumber = [1, 2, 3, 4, 5, 6];
mySerialNumber.pop()//This will remove the last element
//console.log(mySerialNumber);

var removeArray = [["Victor", "Ada"], ["Gloria"]]
removeArray.pop();
//console.log(removeArray);

/*xxxx - Manipulating Array with shift()
    - The shift function is very similar to the pop() function except
      that it removes the first element instead of the last element.
*/
var mySerialNumber2 = [1, 2, 3, 4, 5, 6];
mySerialNumber2.shift();
//console.log(mySerialNumber2);

var removeArray2 = [["Victor", "Ada"], ["Gloria"]];
removeArray2.shift();
//console.log(removeArray2);

/*xxxx - Manipulating Array with unshift()
    - The shift function is similar to the push() function except
      that it the push() function adds an element to the end of the array,
      unshift() adds an element to the beginning of the array. 
*/
var addArray = ["Sarah", "Ann", "Simeon"];
addArray.unshift(["Gloria"]);
//console.log(addArray);

var addArray2 = [["Victor", "Ada"], ["Gloria"]];
addArray2.unshift(["David"]);
//console.log(addArray2);

