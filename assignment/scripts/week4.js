let parkedCars = []; //declare empty array parkedCars.
const maxCars = 5;  //declare variable maxCars.

function parkCar ( carName ) {
  if(parkedCars.length < maxCars){
    return true;
    parkedCars.push(carName);


  }//end if else check.
} //end function parkCar.
parkCar('Jetta Wagon');
parkCar('Nissan Versa');
parkCar('Honda Civic');
parkCar('Honda Fit');
parkCar('Subaru Outback');
