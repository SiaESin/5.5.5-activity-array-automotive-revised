class Vehicle {
	constructor(make, model, year, color, mileage) {
		this.make = make;
		this.model = model;
		this.year = year;
		this.color = color;
		this.passenger = 0;
		this.speed = 0;
		this.mileage = mileage;
		this.started = false;
		this.numberOfWheels = 0;
	}

	start() {
		if (this.fuel > 0) {
			console.log("engine started...!!!");
			return (this.started = true);
		} else {
			console.log("engine cannot start...");
			return (this.started = false);
		}
	}
	accelerate() {
		if (this.started) {
			if (this.fuel > 0) {
				console.log((this.speed += 1));
				this.fuel = this.fuel - 1;
			} else {
				console.log("out of fuel.");
				this.stop();
			}
		} else {
			alert("You need to start the engine first.");
		}
	}
	decelerate() {
		if (this.started) {
			if (this.fuel > 0) {
				if (this.speed > 0) {
					console.log((this.speed -= 1));
					this.fuel = this.fuel - 1;
				} else {
					console.log(this + " has stopped moving");
					this.fuel = this.fuel - 1;
				}
			} else {
				console.log("out of fuel.");
				this.stop();
			}
		} else {
			console.log("You need to start the engine first.");
		}
	}
	stop() {
		this.started = false;
	}

	//optional methods to code for the Vehicle base class

	drive() {
		accelerate();
	}
	brake() {
		decelerate();
	}

	autoPark() {}

	autoDrive() {}

	typeOfVehicle(wheels) {
		if (this.numberOfWheels == 8 && 8 == wheels) {
			console.log(this.model + " " + this.make + " is a Truck");
		} else if (this.numberOfWheels == 4 && 4 == wheels) {
			console.log(this.model + " " + this.make + " is a Car");
		} else if (this.numberOfWheels == 2 && 2 == wheels) {
			console.log(this.model + " " + this.make + " is a Bike");
		} else {
			console.log("Unknown type of vehicle");
		}
	}
}

//Code the Car subclass here, i.e. class Car extends Vehicle ...

class Mercury extends Vehicle{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5
        this.passengers = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 160
        this.fuel = 10
        this.scheduleService = false
    } 
    loadPassenger(num){
        num = this.passengers
        if (num <= this.maximumPassengers){
            console.log('Everyone fits in the car')
        } else {
            console.log('There is not enough room in the car')
        }
    }  
    checkService(){
        if (this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService
          }  
        }  
    
    start(){
        if (this.fuel > 0){
            console.log('The engine has started') //console.log goes before "return"
            return this.start = true
            
        } else {
            console.log('The engine cannot start without fuel')
            return this.start = false
        }
    }
    
}




//Creating Instances and Testing Them


//This is an instance of the Vehicle class. You can use it to test your code for the Vehicle class.

let v = new Vehicle("Mercury", "LX Sedan", "1965", "color", "mileage");

console.log(v.make);

//You can use the same instance "v" of the Vehicle class and dot notation to add properties of the Car class to it, but you should also create at least one totally new instance with just the Car class and test it out with Vehicle and Car methods (such as with v.make shown above).
let dreamCar = new Vehicle("Mercury", "Sedan", "1999", "Satin Nickel", "99999")

console.log(dreamCar.color)
console.log(dreamCar.mileage)
dreamCar.start()
dreamCar.checkService()
dreamCar.loadPassenger(5)


//Create at least two new instances of the Car class and test them here:















//Bonus (optional of course)

//Code the Truck subclass of Vehicle here
class Truck extends Vehicle{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maximumPassengers = 3
        this.passengers = 0
        this.numberOfWheels = 8
        this.maximumSpeed = 120
        this.horsePower = 400
        this.payloadCapacity = 5000
		this.canTow = false
	
    }
	canTow(){
		if (this.canTow = true){
			console.log((this.model) + ' ' + 'has a tow hitch.')
		} else {
			console.log((this.model) + ' ' + 'cannot tow.')
		}
	} 
}

let myTruck = new Truck ('Mercury', 'Faker', '1999', 'midnight', '8675319')
console.log(myTruck.model)