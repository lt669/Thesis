inlets = 3;
outlets = 4;

var folderNumber; //Which folder to find files depending on number of RIR required\
var filename1, filename2, filename3, filename4;
var sampleRate;
var folder;
var extension;

	// Audio Lab File location
	// /Users/audiolab/Desktop/VSS\\ Patch\\ Single\\ RIR/Data/

//var path = "/Users/Lewis/Uni Work/4th Year/Project/Max/VSS Patch Single RIR/Data/Test1"
var path = "/Users/audiolab/Desktop/VSS Patch Single RIR/Data/Test1"

function msg_int(input){
	
	if(inlet == 0){
	if(input ==1){
		filename1 = ""+path+"/"+folder+"/Trimmed/"+type+"/Trimmed_9_2_0"+extension;
		filename2 = ""+path+"/"+folder+"/Trimmed/"+type+"/Trimmed_9_2_90"+extension;
		filename3 = ""+path+"/"+folder+"/Trimmed/"+type+"/Trimmed_9_2_180"+extension;
		filename4 = ""+path+"/"+folder+"/Trimmed/"+type+"/Trimmed_9_2_270"+extension;
	}else if (input == 2){
		filename1 = ""+path+"/"+folder+"/Trimmed/"+type+"/Trimmed_9_4_0"+extension;
		filename2 = ""+path+"/"+folder+"/Trimmed/"+type+"/Trimmed_9_4_90"+extension;
		filename3 = ""+path+"/"+folder+"/Trimmed/"+type+"/Trimmed_9_4_180"+extension;
		filename4 = ""+path+"/"+folder+"/Trimmed/"+type+"/Trimmed_9_4_270"+extension;
	}else if (input == 3){
		filename1 = ""+path+"/"+folder+"/Trimmed/"+type+"/Trimmed_9_9_0"+extension;
		filename2 = ""+path+"/"+folder+"/Trimmed/"+type+"/Trimmed_9_9_90"+extension;
		filename3 = ""+path+"/"+folder+"/Trimmed/"+type+"/Trimmed_9_9_180"+extension;
		filename4 = ""+path+"/"+folder+"/Trimmed/"+type+"/Trimmed_9_9_270"+extension;
	}else if (input == 4){
		filename1 = ""+path+"/"+folder+"/Trimmed/"+type+"/Trimmed_Desk_0"+extension;
		filename2 = ""+path+"/"+folder+"/Trimmed/"+type+"/Trimmed_Desk_90"+extension;
		filename3 = ""+path+"/"+folder+"/Trimmed/"+type+"/Trimmed_Desk_180"+extension;
		filename4 = ""+path+"/"+folder+"/Trimmed/"+type+"/Trimmed_Desk_270"+extension;
	}	
	outlet(0, "open",filename1);
	outlet(1, "open",filename2);
	outlet(2, "open",filename3);
	outlet(3, "open",filename4);
	}
	else if(inlet == 1){
	if(input == 0){
		folder = "Real";
		extension = "_RIR_V4.wav";
		type = "Calibrated";
	} else if (input == 1){
		folder = "Odeon";
		extension = ".wav";
		type = "44"
	}	
	}
}