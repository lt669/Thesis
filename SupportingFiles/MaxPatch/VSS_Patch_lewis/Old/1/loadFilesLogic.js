inlets = 5;
outlets = 5;

//Create arrays to store previous positions
var xArray = new Array(2);
var yArray = new Array(2);

var windowSize = new Array(2);

//Variables to use for file searching
var fileX, fileY, search;

//Defines how to split up the grid
var numberOfMeters;

//Loads appropriate files given users finger coordinates
function msg_int(input){
	if(inlet == 0){
		xPos = input; 
	} else if (inlet == 1){
		yPos = input;//Add off set to start at (0,1)
	} else if (inlet == 2){
		windowSize [0] = input;
	} else if (inlet == 3){
		windowSize [1] = input;
	} else if(inlet==4){
		numberOfMeters = input;
	}
	
	//Split into sections
	xPosition = (xPos/windowSize[0])*(numberOfMeters-1);
	yPosition = (yPos/windowSize[1])*(numberOfMeters);
		
	//Round to nearest value
	xSection = Math.round(xPosition)+1; //N RIRs across (lcd starts at (0,0))
	ySection = Math.round(yPosition); //16 down
	
	//Distance in 100% away from center section
	xBetween = 2*(xPosition+1 - xSection); //x2 to get 100%
	yBetween = 2*(yPosition - ySection);
	
	//Which RIR to load in centre location
	outlet(0,xSection);
	outlet(1,ySection);
	
	//Output panning values
	outlet(2,xBetween);
	outlet(3,yBetween);
	
	//Store current location
	xArray[0] = xSection;
	yArray[0] = ySection;
	
	//If either coordinate is changed search for new files
	if(xArray[0] != xArray[1] || yArray[0] != yArray[1]){
		
		if(xArray[0] != xArray[1]){
			//Store previous value
			xArray[1] = xArray[0];
			X = xArray[0];
		}
		
		if(yArray[0] != yArray[1]){
			yArray[1] = yArray[0];
			Y = yArray[0]
		}
		
		//Output Centre Location
		fileNumber = X + ((numberOfMeters)*Y);
		outlet(4,fileNumber);
		
		//Search for new files
		//searchFile();
	}
}

//function searchFile(){

	//Set correct file name
//	fileNumber = X + (15*Y);
//	post("\n number: "+fileNumber);

	//Set file search information
//	filename1 = "./Data/" + fileNumber + "_0.wav";
//	filename2 = "./Data/" + fileNumber + "_90.wav";
//	filename3 = "./Data/" + fileNumber + "_180.wav";
//	filename4 = "./Data/" + fileNumber + "_270.wav";
//	outlet(4, "open",filename1);
//	outlet(5, "open",filename2);
//	outlet(6, "open",filename3);
//	outlet(7, "open",filename4);
//}
	