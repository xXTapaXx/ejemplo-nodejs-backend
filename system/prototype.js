// prototype.js
// Herencia de prototipos.


/**
 * inArray
 * Localiza un elemento en el array actual.
 *
 * @return Boolean
 **/
Array.prototype.inArray = function () {
	for (var j in this) {
		if (this[j] === arguments[0]) {
			return true;
		}
	}

	return false;
}