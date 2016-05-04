inlets = 6;
outlets = 2;

var xLocation = [];
var yLocation = [];
var section = [];
var xCount, yCount, sCount;
var length = 0;
var timer;

function msg_int(input){
	//Add coordinate and sections to the end of each array with every new input
	if(inlet == 0){
		xLocation.push(input);
//		post('\n xLocation: ',xLocation[xLocation.length-1]);
//		post(" ",xLocation);
		xCount++;
		post("\n xCount: ",xCount);
	} else if (inlet == 1){
		yLocation.push(input);
//		post('\n yLocation: ',yLocation[yLocation.length-1]);
//		post(" ",yLocation);
		yCount++;
//		post("\n yCount: ",yCount);
	} else if (inlet == 2){
		section.push(input);
//		post('\n section: ',section[section.length-1]);
//		post(" ",section);
		sCount++;
//		post("\n sCount: ",sCount);
//		post("\n ");
	} else if (inlet == 3){ //If timer is done
		//post("\n TIMER");
		if(xLocation.length == 0){
			//Dont output anything
		}else{
			if(section.length > 0){
				findLength();
				outputCounter = 0;
			}
		}	
	} else if(inlet == 4){
		timer = input;
		if(section.length >= 1 && outputCounter < length){
			outputCoords();
		}
	} else { //Clear arrays
		xLocation = [];
		yLocation = [];
		section = [];
		xCount = yCount = sCount = length = outputCounter = 0;
		post("\n Location Arrays Cleared");
		}
}	

function findLength(){
	post("\n ----- Find Length ----- ");
	var	previousSection = section[0]; //Store current section number
	for(i=0;i<section.length;i++){
		if(previousSection == section[i]){
			length = i+1;//length + 1;
//			post("\n length++ ",length);
		} else {
			break;
		}	
	}	
	post("\n ----------------------- ");
}	

function outputCoords(){
	if(timer >= (2500/length)){
		//Output coordinates
		outputCounter++;
		outlet(0,xLocation[0]);
		outlet(1,yLocation[0]);
		xLocation.shift();
		yLocation.shift();
		section.shift();
	}
}	

function outputCoords2(){
	var	previousSection = section[0]; //Store current section number
	
	while(previousSection == section[0]){
		outlet(0,xLocation[0]);
		outlet(1,yLocation[0]);
		previousSection == section[0]; //Store current section number
		post("\n xLocation"+xLocation[0]);
		if(xLocation.length > 0){
			xLocation.shift();
			yLocation.shift();
			section.shift();
		}
	}	
}	
