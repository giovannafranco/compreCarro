var Car = (function() {
	'use strict';

	function Car(model, year, brand, color, photo, sold, url) {
		this.model = model;
    this.year  = year;
    this.brand = brand;
    this.color = color;
    this.photo = photo;
    this.sold  = sold;
    this.url   = url;

  }

	Car.prototype.isSold = function(sold) {
		return sold;
	};

	// converte o array
	Car.prototype.convertJSON = function(arr){
	  var cars = [];

	  for (var k in arr) {
	  	var car = arr[k];

			var model = car.model;
		  var year  = car.year;
		  var brand = car.brand;
		  var color = car.color;
		  var photo = car.photo;
		  var sold  = car.sold;
		  var url   = car.url;

		  cars.push(new Car(model, year, brand, color, photo, sold, url));
	  }
	  return cars;
	
	}

	return Car;
})();

