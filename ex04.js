function dansPlage(nombre, min, max) {
	return nombre > min && nombre < max || nombre == min || nombre == max
}

console.log(dansPlage(5, 1, 10)); 
console.log(dansPlage(15, 1, 10));
console.log(dansPlage(10, 1, 10)); 
console.log(dansPlage(1, 1, 10));