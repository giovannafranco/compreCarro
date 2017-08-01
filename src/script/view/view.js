var CarView = (function(){
	'use strict'


	function CarView(){
		this.init();
		this._controller = new CarController();
	}

	CarView.prototype.showCarGrid = function(cars) {
		// codigo para montar lista de carros
		var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
		

	  for (var j = 0; j < cars.length ; j++) {
	  	var row   = table.insertRow(0);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			var cell5 = row.insertCell(4);
			var cell6 = row.insertCell(5);
			
	  	var element = document.createElement('img');
	  	element.setAttribute('src', cars[j].photo);

	    cell1.innerHTML = '<img src="'+cars[j].photo+'" width=150 height=150>';   
	    cell2.innerHTML = cars[j].model;
			cell3.innerHTML = cars[j].year;
			cell4.innerHTML = cars[j].brand;
			cell5.innerHTML = cars[j].color;
			cell6.innerHTML = '<button class="soldBtn" type="button" data-url='+ cars[j].url +'>Comprar</button>' 
	  }

	  // fix metodo
	  var buttons = document.getElementsByClassName('soldBtn');
	  for (var i = 0; i < buttons.length; i++) {
	  	var button = buttons[i];
	  	button.addEventListener('click', function() {
	  		var carUrl = this.getAttribute('data-url');
	  		
	  		console.log(carUrl);
	  		this._controller.soldCar(carUrl);

	  	});
	  }
	}

	CarView.prototype.init = function(){
		var _this = this;
		var button = document.getElementById('register');
		button.addEventListener('click', function() { _this.save() });
	}

	CarView.prototype.save = function() {
	  var model = document.getElementById('model').value;
		var year  = document.getElementById('year').value;
		var brand = document.getElementById('brand').value;
		var color = document.getElementById('color').value;
		var photo = document.getElementById('photo').value;
		var sold  = document.getElementById('sold').value;

		var car = new Car(model, year, brand, color, photo, sold); 

		if (this._controller !== undefined) {
			this._controller.saveCar(car);	
		}
	}

 return CarView;

})();