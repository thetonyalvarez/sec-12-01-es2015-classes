describe("OO Challenge Tests", () => {
	beforeAll(() => {
		let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
		let myFirstCar = new Car("Toyota", "Corolla", 2005);
		let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
		let garage = new Garage(2);
	});
	it("should create a new Vehicle", () => {
		expect(myFirstVehicle.make).toEqual("Honda");
		expect(myFirstCar.model).toEqual("Corolla");
		expect(myFirstMotorcycle.numWheels).toEqual(2);
		expect(() => myFirstVehicle.honda).toThrowError;
		expect(() => myFirstCar.corolla).toThrowError;
		expect(() => myFirstMotorcycle.year2000).toThrowError;
	});
	it("should return empty numWheels on Vehicle class", () => {
		expect(myFirstVehicle.numWheels).toEqual(undefined);
	});
	it("should return 'Beep.' when honk() is called", () => {
		expect(myFirstVehicle.honk()).toEqual("Beep.");
		expect(myFirstCar.honk()).toEqual("Beep.");
		expect(myFirstMotorcycle.honk()).toEqual("Beep.");
	});
	it("should return a string when toString() is called", () => {
		expect(myFirstVehicle.toString()).toEqual("The vehicle is a Honda Monster Truck from 1999.");
		expect(myFirstCar.toString()).toEqual("The vehicle is a Toyota Corolla from 2005.");
		expect(myFirstMotorcycle.toString()).toEqual("The vehicle is a Honda Nighthawk from 2000.");
	});
	it("should return 'VROOM!!!' when revEngine() is called", () => {
		expect(myFirstMotorcycle.revEngine()).toEqual("VROOM!!!");
	});
	it("should return revEngine() on a Motorcycle class only", () => {
		expect(() => myFirstVehicle.revEngine()).toThrowError;
		expect(() => myFirstCar.revEngine()).toThrowError;
		expect(myFirstMotorcycle.revEngine()).toEqual("VROOM!!!");
	});
	afterAll(() => {
		let myFirstVehicle = '';
		let myFirstCar = '';
		let myFirstMotorcycle = '';
		let garage = '';
	});

})