import { Vehicle } from './vehicleModule';
//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
class Car extends Vehicle{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maximumPassaenger = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
        
    }
    

    start(){
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            return this.started = false;
            console.log("engine cannot start...");
        }
    }
    service(){
        if (mileage > 3000){
            return this.scheduleService = true;
            console.log('Time for service')

        }
    }

    loadPassenger(){
        if(this.passenger < this.maximumPassaenger){
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " not enough space for passagers.");
            }
        } else {
            console.log(this.model + " " + this.make + " Full Car");
        }
        } 
        

    }
    

    let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000)
    myCar.start()
    myCar.loadPassenger(5)
    myCar.stop()
    myCar.checkService()
    console.log(myCar)