var CarController = (function() {
	'use strict'

	var _service = new CarService();		
	
	function CarController() {}

	CarController.prototype.soldCar = function(carUrl) {
		var car = _service.soldCar(carUrl);
		console.log(car);
	}

	CarController.prototype.saveCar = function(car) {
		var car = _service.saveCar(car);
		console.log(car);
	}

	CarController.prototype.showCarsGrid = function() {
		var _car = new Car();
		var _view = new CarView();
		var cars = _car.convertJSON(_service.getCars());
		
		_view.showCarGrid(cars);
	}

	return CarController;

})();
