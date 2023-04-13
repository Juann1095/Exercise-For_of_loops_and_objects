//-----FOR OF LOOPS AND OBJECTS-----//
//To begin, it´s important to know that a for of loop cannot work on an object directly, since 
//--AN OBJECT IS NOT ITERABLE--
const car = {
    speed: 100,
    color: "blue"
}

for (prop of car) {
    console.log(prop)
}

//Contrary to objects, arrays ARE iterable. For example:
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}

/* Luckily, you can use the fact that a for of loop can be run on arrays to loop over objects.
    How??
    You need to review three built-in methods:
    Object.keys(),Object.values(),Object.entries().
*/

//-----BUILT-IN METHODS-----//
//-----1.- OBJECT.KEYS -----//
/*
    -Object.keys() method recieves an object as its parameter. 
     This object is the object you want to loop over. 
     Return array of properties when calling the Object.keys() method.

     Here´s an example of running the Object.keys() method on a brand new --car2-- object
*/
const car2 = {
    speed:200,
    color:"red"
}
console.log(Object.keys(car2)); // ['speed','color']

/* So, when i run Object.keys() and pass it my --car2-- object, 
the returned value is an array of Strings, where each string is a property 
key of the properties contained in my --car2-- object.
*/


//-----2.- OBJECT.VALUES() -----//
const car3 = {
    speed:300,
    color:"yellow"
}
console.log(Object.values(car3)); //[300], 'yellow'

//-----3.- OBJECT.ENTRIES() -----//
//object.entries(). which returns an array listing both the keys and the values
const car4 = {
    speed:400,
    color: 'magenta'
}
console.log(Object.entries(car4));
//What gets returned from the invocation of the object.entries() method is the following:
[ ['speed',400], ['color','magenta'] ]

/*This time, the values that get returned are 2-members arrays nested inside an array.
In other words, you get an array of arrays, where each array item has 2 members, 
the first being a property´s key, and the second being a property´s value.

Effectively, it´s as if you was listing all of a given object´s properties, a bit like this:
[
    [propertyKey, propertyVal],
    [propertyKey, propertyVal],
    ...etc
]
To summarise; You can loop over arrays using the --for of-- loop. Also that you can extract
object´s keys, values, or both, using the --object.keys()-- --object.values()-- and --object.entries()--
*/

//-----EXAMPLES-----//
var clothingItem = {
    price:50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}
for (key of Object.keys(clothingItem)) {
    console.log(keys, ":", clothingItem[key])
}
/* The trickiest part to understand this syntax is  the --clothingItem[key]
The object´s member is accessed using brackets notation.

To revisit this concept and show a practical demo of how that works, let´s code a function that randomly assigns either the string
--speed-- or the string --color-- to a variable name, and then build an object that has only two keys: --speed key and --color-- key

After this setup, you will be able to dynamically access either one of those properties on a brand new --drone-- object,
using the brackets notation.
*/

//-----EXAMPLE-----//
function testBracketsDynamicAccess(){
    var dynamicKey;
    if(Math.random() > 0.5) {
        dynamicKey = "speed";
    } else {
        dynamicKey = "color";
    }
    var drone = {
        speed:15,
        color:"orange"
    }
    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();

/* Running testVBracketsDynamicAccess() function few times, and you´ll notice that sometimes
the value outputs --15-- and sometimes it´s --orange--, although i´m always accessing
the drone[dynamicKey] key. Since the value of the dynamicKey is populated on the
Math.random() invocation, sometimes that expression evaluates to --drone["speed"]--, and other times
that expression evaluates to --drone["color"]--
*/
