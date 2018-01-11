var range = function(num1,num2,step){
	let array = [];
	if(!step){
		step = 1;
	}
	if(step > 0){
		while(num1 <= num2){
		array.push(num1);
		num1 += step;
		}
	}
	else{
		while(num1 >= num2){
			array.push(num1);
			num1 += step;
		}
	}
	return array;
};

var sum = function(array){
	let sum = 0;
	array.forEach(function(item){
		sum += item;
	});
	return sum;
};

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]