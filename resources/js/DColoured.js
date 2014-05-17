
//  Unfinished
//  Shadow Momo

var obj_list;
var cn;

function DCInit_MO(colorname){
	DCSetCN_MO(colorname);
	DCChange_MO();
}

function DCSetCN_MO(colorname){
	cn = colorname;
}

function DCChange_MO(){
	for (var i=0; i < obj_list["length"]; i++){
		if (obj_list[i].getAttribute(cn) == "#000000"){
			obj_list[i].setAttribute(cn, "#FFFFFF");
			document.body.style.backgroundColor = "#000000";
		} else {
			obj_list[i].setAttribute(cn, "#000000");
			document.body.style.backgroundColor = "#FFFFFF";
		}
	}
}

function DCChangeO_MO(id){
	if (document.getElementById(id).getAttribute(cn) == "#000000"){
		document.getElementById(id).setAttribute(cn, "#FFFFFF");
	} else {
		document.getElementById(id).setAttribute(cn, "#000000");
	}
	
}


obj_list = document.getElementsByClassName("DColoured");
for (var i = 0; i < obj_list["length"]; i++){
	obj_list[i].setAttribute("onclick", "DCChangeO_MO(this.id);")
}
DCInit_MO("fill")
document.getElementById("DCButton").setAttribute("onclick", "DCChange_MO();");