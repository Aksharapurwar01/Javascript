function Car() {
  console.log("Car instance created!");
}

Car.prototype.color = "Red";

Car.prototype.drive = function () {
  console.log(`Driving the car painted in ${this.color}...`);
};

const myCar = new Car(); // new ins

console.dir(myCar);

console.log(`The car's color is: ${myCar.color}`);
myCar.drive();
