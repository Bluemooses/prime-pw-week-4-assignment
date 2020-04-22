let parkedCars = []; //declare empty array parkedCars.
const maxCars = 5; //declare variable maxCars.

function parkCar(carName) {
  console.log('inside parkCar');
  if (parkedCars.length < maxCars) {
    return true;
  } else {
    return false;
  } //end else if check
} //end function parkCar.