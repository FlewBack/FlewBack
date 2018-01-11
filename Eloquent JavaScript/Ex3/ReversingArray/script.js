var reverseArray = function(array){
	let count = array.length;
	let nArray = [];
	for(;count>0;count--){
		nArray.push(array[count-1]);
	}
	return nArray;
};

var reverseArrayInPlace = function(array){
	let count = array.length;
	let nArray = [];
	for(;count>0;count--){
		nArray.push(array[count-1]);
	}
	return nArray;
};