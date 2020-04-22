console.log('js');

let parkedCars = []; //create empty array of cars parked in garage.
const maxCars = 5; //create constant for max cars allowed in garage.

function parkCar( Honda, Volkswagon, Nissan, Harley, Subaru){
console.log( 'Checking if I can park my car!'); //let's us know if we are in this function.
    if ( maxCars < parkedCars.length){
      return true;
    } // check if  there's room in garage for more cars!
    else{
      return false;
    } //end check if garage has space for more cars.

} //end parkCar

parkCar();
console.log('running parkCar function.')  //running function to check status.

console.log(parkedCars);
