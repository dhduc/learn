// A car class
function Car( model ) {

    this.model = model;
    this.color = "silver";
    this.year = "2012";

    this.getInfo = function () {
        return this.model + " " + this.year;
    }
}

// Initialize object
var myCar = new Car("Ford");
myCar.year = "2010";
console.log( myCar.getInfo() );