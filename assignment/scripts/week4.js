let parkedCars = [];  //creating parkedCars array
const maxCars = 5;  //const maxCars allowed

function parkCar( carName ){ //creates function parkCar with an argument of carName.
  if(maxCars > parkedCars.length){  //is there room in the garage to park the carName?
    parkedCars.push(carName); //pushes argument parkCar to parkedCar
    return true;  //returns true if a carName was pushed.
  } //ending if statement
  else{
    return false;
  } //ending else statement
}//ending parkCar function

console.log(parkCar("Chevy Impala"));
console.log(parkCar("Tesla X"));
console.log(parkCar("Honda Accord"));
console.log(parkCar("Volkswagon Jetta Wagon"));
console.log(parkCar("Subaru Outback"));
console.log(parkCar("Monte Carlo SS Coupe"));
console.log(parkCar("Chevy Malibou"));

function isParkedHere( carNamed ){  //creates function isParkedHere
  if(isParkedHere.includes( carNamed)){
    return true; //returns true if a carNamed is parked in garage
  }
  else{
    return false; //returns falsed if that car isn't parked in garage.
  }
}//ends isParkedHere function
