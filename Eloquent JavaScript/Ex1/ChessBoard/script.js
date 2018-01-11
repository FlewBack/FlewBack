var numberVer = 8, numberHor = 8; variable = "";

for(i=1;i<=numberVer;i++){
	if(!(i % 2)){
		variable +=" ";
	}
	for(j=1; j<=numberHor; j++){
		if(j % 2){
			variable +=" ";
		}
		else{
			variable +="#";
		}
	}
	variable+="\n";
}
console.log(variable);