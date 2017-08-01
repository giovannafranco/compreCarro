var CarService = (function() {
	'use strict'

	function CarService() {
		this._ajaxUtils = new AjaxUtils();
	}

	CarService.prototype.getCars = function() {
		this._ajaxUtils.makeSyncCall('http://localhost:8000/cars/');
		return this._ajaxUtils.getObjectArr();
	}

	CarService.prototype.soldCar = function(carUrl) {
		this._ajaxUtils.put(carUrl, {'sold': true});
		return this._ajaxUtils.getObjectArr();
	}
	
	CarService.prototype.saveCar = function(car) {
		delete car.photo;
		delete car.url;
		this._ajaxUtils.save(car);
		return this._ajaxUtils.getObjectArr();
	}

	return CarService;
})();