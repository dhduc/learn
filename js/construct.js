// Create a new empty object;
// Option 1
var newObject = {};

// Option 2
//var newObject = Object.create( Object.prototype );

// Option 3
//var newObject = new Object();

// Assign key and value to object
newObject.someKey = "Hello JS";
var value = newObject.someKey;

newObject["someKey"] = "Hello Node";
var value = newObject["someKey"];

Object.defineProperty( newObject, "someKey", {
    value: "Text",
    writable: true,
    enumerable: true,
    configurable: true,
});