
// до отрицательного числа
function isEven(number){
	if(number == 0){
		return true;
	} 
	else if(number == 1){
		return false;
	}
	else{
	return isEven(number-2);
	}
}

// с отрицательным числом
function isEven(number){
	if(number < 0){
		number = Math.abs(number);
	}
	if(number == 0){
		return true;
	} 
	else if(number == 1){
		return false;
	}
	else{
	return isEven(number-2);
	}
}