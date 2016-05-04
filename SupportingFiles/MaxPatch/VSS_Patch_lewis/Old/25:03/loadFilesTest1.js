inlets = 3;
outlets = 4;

var folderNumber; //Which folder to find files depending on number of RIR required\
var filename1, filename2, filename3, filename4;
var sampleRate;
var folder;


	// Audio Lab File location
	// /Users/audiolab/Desktop/VSS\\ Patch\\ Single\\ RIR/Data/

//var path = "/Users/Lewis/Uni Work/4th Year/Project/Max/VSS Patch Single RIR/Data/Test1"
var path = "/Users/audiolab/Desktop/VSS Patch Single RIR/Data/Test1"

function msg_int(input){
	
	if(inlet == 0){
	if(input ==1){
		filename1 = ""+path+"/"+folder+"/Trimmed_9_2_0_RIR_V4.wav";
		filename2 = ""+path+"/"+folder+"/Trimmed_9_2_90_RIR_V4.wav";
		filename3 = ""+path+"/"+folder+"/Trimmed_9_2_180_RIR_V4.wav";
		filename4 = ""+path+"/"+folder+"/Trimmed_9_2_270_RIR_V4.wav";
	}else if (input == 2){
		filename1 = ""+path+"/"+folder+"/Trimmed_9_4_0_RIR_V4.wav";
		filename2 = ""+path+"/"+folder+"/Trimmed_9_4_90_RIR_V4.wav";
		filename3 = ""+path+"/"+folder+"/Trimmed_9_4_180_RIR_V4.wav";
		filename4 = ""+path+"/"+folder+"/Trimmed_9_4_270_RIR_V4.wav";
	}else if (input == 3){
		filename1 = ""+path+"/"+folder+"/Trimmed_9_9_0_RIR_V4.wav";
		filename2 = ""+path+"/"+folder+"/Trimmed_9_9_90_RIR_V4.wav";
		filename3 = ""+path+"/"+folder+"/Trimmed_9_9_180_RIR_V4.wav";
		filename4 = ""+path+"/"+folder+"/Trimmed_9_9_270_RIR_V4.wav";
	}else if (input == 4){
		filename1 = ""+path+"/"+folder+"/Trimmed_Desk_0_RIR_V4.wav";
		filename2 = ""+path+"/"+folder+"/Trimmed_Desk_90_RIR_V4.wav";
		filename3 = ""+path+"/"+folder+"/Trimmed_Desk_180_RIR_V4.wav";
		filename4 = ""+path+"/"+folder+"/Trimmed_Desk_270_RIR_V4.wav";
	}	
	outlet(0, "open",filename1);
	outlet(1, "open",filename2);
	outlet(2, "open",filename3);
	outlet(3, "open",filename4);
	}
	else if(inlet == 1){
	if(input == 0){
		folder = "Real";
	} else if (input == 1){
		folder = "Odeon";
	}	
	}
}