let parkedCars = [];  //creating parkedCars array
const maxCars = 5;  //const maxCars allowed

function parkCar( carName, color, vin ){ //creates function parkCar with an argument of carName.
  if(maxCars > parkedCars.length){  //is there room in the garage to park the carName?
    parkedCars.push({model:carName, color: color, vin:vin); //pushes argument parkCar to parkedCar
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
    return false; //returns false if that car isn't parked in garage.
  }
}//ends isParkedHere function

console.log(isParkedHere("Chevy Impala")); //calls isParkedHere function with argument in console.
console.log(isParkedHere("Tesla X"));
console.log(isParkedHere("Honda Accord"));
console.log(isParkedHere("Turbo Diesel Z500"));

function takeForASpin( carName ){ //creates function takeForASpin with argument carName

}//ends function takeForASpin
