let app = (function(){
    let getId = function(...v){ return `${v} ${this.carId}`; };
    return { getId };
})();

class Vehicle {
    constructor(name, wheels){
        this.name = name;
        this.wheels = wheels;
    }
    getWheelsPerSide(){ return this.wheels;}
}
class Car extends Vehicle {
    constructor(name, wheels, size){
        super(name, wheels);
        this.size = size;
    }
    getWheelsPerSide(){ return this.wheels/4;}
}

Car.prototype.getNameLength = function(){ return this.name.length; };
let car = new Car('Type',4,'Big');
let carB = new Car();
console.log(car, car.name, car.getNameLength()   );