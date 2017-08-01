// Fazer chamada PATCH (atualizar alguns campos não o objeto inteiro)
var conf = {
	method: 'PATCH',
	url: 'http://localhost:8000/cars/1/',
	data: { sold: false }
};
$.ajax(conf).done(function(data) { console.log(data) });


// Fazer o GET (pegar informação do servidor)
var conf = {
	method: 'GET',
	url: 'http://localhost:8000/cars/'
};
$.ajax(conf).done(function(data) { console.log(data) });
// forma 2
$.get('http://localhost:8000/cars/', function(data) { retorno = data; });


// Fazer POST (criar um novo item)
var conf = {
	method: 'POST',
	url: 'http://localhost:8000/cars/',
	data: { model: 'Logan', year: 2011, color: 'Silver', brand: 'Renault' }
};
$.ajax(conf).done(function(data) { console.log(data) });
// forma 2
$.post('http://localhost:8000/cars/', 
		   { model: 'S10', year: 2000, color: 'Black', brand: 'Chevrolet' },
		   function(data) { retorno = data; });