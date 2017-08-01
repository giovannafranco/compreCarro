var AjaxUtils = (function() {
	'use strict'

	function AjaxUtils() {
		this._arr = [];
	}

	AjaxUtils.prototype.makeSyncCall = function(url, method='GET') {		

		var STATUS_OK = 200;
		
		var _xhttp = new XMLHttpRequest();
		_xhttp.open(method, url, false);
    _xhttp.send(null);

		if (_xhttp.status === STATUS_OK) {
			this._setObjectArr(JSON.parse(_xhttp.responseText));
		}

	};

	AjaxUtils.prototype.put = function(url, params) {		

		var STATUS_OK = 200;
		
		var _xhttp = new XMLHttpRequest();
		_xhttp.open('PATCH', url);
		_xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    _xhttp.send(JSON.stringify(params));

		if (_xhttp.status === STATUS_OK) {
			this._setObjectArr(JSON.parse(_xhttp.responseText));
		}

	};	

	AjaxUtils.prototype.save = function(params) {		

		var STATUS_OK = 200;
		
		var _xhttp = new XMLHttpRequest();
		_xhttp.open('POST', 'http://localhost:8000/cars/');
		_xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    console.log(JSON.stringify(params));
    _xhttp.send(JSON.stringify(params));

		if (_xhttp.status === STATUS_OK) {
			this._setObjectArr(JSON.parse(_xhttp.responseText));
		}

	};	

	AjaxUtils.prototype._setObjectArr = function(arr) {
		this._arr = arr;
	};

	AjaxUtils.prototype.getObjectArr = function() {
		return this._arr;
	};

	return AjaxUtils;
})();
