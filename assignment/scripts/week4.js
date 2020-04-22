let parkedCars = []; //declare empty array parkedCars.
const maxCars = 5; //declare variable maxCars.

function parkCar(carName) {
  console.log('inside parkCar', carName);
  if (maxCars < parkedCars.length) {
    return true;
    parkedCars.push(carName);
    return parkedCars;
  } else {
    return false;
  } //end else if check
} //end function parkCar.

parkCar('Versa');
parkCar('Volvo');
parkCar('Cadillac');
parkCar('Volkswagon');
parkCar('Mini Cooper');
parkCar('Hyundai Sonata');
console.log(parkedCars);
console.log(parkCar());


function isParkedHere( carNamed) {
if(parkedCars.includes(carName) === carNamed){

  return true;
}
else{
  return false;
}
}//ends function isParkedHere.
isParkedHere( 'Versa');

function takeForASpin (carName) {

} //ends takeForASpin.
