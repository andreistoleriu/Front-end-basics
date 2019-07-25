function MakeCar(myCar, milage) {
    var car = {}
    car.make = myCar;
    car.milage = milage;
    car.changeKm = function(km) {
        return car.milage += km;
    }
return car;
}

var car = MakeCar('Skoda', 90000);
console.log(car);