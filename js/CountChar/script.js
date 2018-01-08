
// Первая версия программы
var countBs = function(string){
	for(i = 0, count = 0; i < string.length; i++){
		if(string.charAt(i) == "B"){
			count +=1;
		}
	}
	return count;
};

// Финальная версия программы
var countChar = function(string,symbol){
	for(i = 0, count = 0; i < string.length; i++){
		if(string.charAt(i) == symbol){
			count +=1;
		}
	}
	return count;
};