inlets = 1;
outlets = 1;

function msg_int(input){
	if(input < 2){
		//Dont send doneLoad2 through
	}else{
		outlet(0,1);
	}
}	