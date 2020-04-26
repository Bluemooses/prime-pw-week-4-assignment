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

parkCar( "Chevy", "Green", "654798752");
parkCar( "Tesla", "Gold", "65479");
parkCar("Honda", "Brown", "654798");
parkCar("Nissan", "Blue", "7898796874685546");
parkCar("Volvo", "Red", "654654654654");
parkCar("Ford", "Purple", "65465465411321");


function isParkedHere( searchTerm){  //creates function isParkedHere with argument searchTerm.
  if(parkedCars.some(car => car.model === searchTerm || car.color === searchTerm || car.vin === searchTerm)){
    console.log("We found a match", searchTerm);
    return true; //returns true if a carNamed is parked in garage
  }
  else{
    console.log("We didn't find what we're looking for", searchTerm);
    return false; //returns false if that car isn't parked in garage.
  }
}//ends isParkedHere function

// console.log(isParkedHere("Chevy Impala")); //calls isParkedHere function with argument in console.
// console.log(isParkedHere("Tesla X"));
// console.log(isParkedHere("Honda Accord"));
// console.log(isParkedHere("Turbo Diesel Z500"));

function takeForASpin( searchTerm ){ //creates function takeForASpin with argument carName
  console.log("parked cars =", parkedCars);
  if(isParkedHere( searchTerm )){ //creates if argument on searchTerm
    let parkingSpaceNumber = parkedCars.indexOf(searchTerm); //creates variable to check index of our searchTerm in parkedCars array
  } //ends our if check
}//ends function takeForASpin
