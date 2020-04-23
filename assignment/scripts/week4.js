let parkedCars = [];  //creating parkedCars array
const maxCars = 5;  //const maxCars allowed

function parkCar( carName ){
  if(maxCars > parkedCars.length){
    parkedCars.push(carName);
    return true;
  } //ending if statement
  else{
    return false;
  } //ending else statement
}//ending parkCar function
