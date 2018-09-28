function prevNext(option) {

	var id = option.id;
	var imageValue= document.getElementById('art').value;

	if(id=="prev" && imageValue>1) {
		imageValue = parseInt(imageValue)-1;
		var imageSource = "../img/arts/art" + imageValue + ".jpeg";
		document.getElementById('art').value=imageValue;
		document.getElementById('art').src=imageSource;
	}
	else if(id=="next" && imageValue<16) {
		imageValue = parseInt(imageValue)+1;
		var imageSource = "../img/arts/art" + imageValue + ".jpeg";
		document.getElementById('art').value=imageValue;
		document.getElementById('art').src=imageSource;
	}

	disableFunction(imageValue);
}

function disableFunction(imageValue) {

	var p = document.getElementById("prev");
	var n = document.getElementById("next");

	if(imageValue > 1 && imageValue < 16) {

		p.style.opacity="1.0";
		n.style.opacity="1.0";
		p.disabled=false;
		n.disabled=false;
	}

	else if(imageValue == 1) {
		p.style.opacity="0.3";
		p.disabled=true;
		n.style.opacity="1.0";
		n.disabled=false;
	}

	else if(imageValue == 16) {
		n.style.opacity="0.3";
		n.disabled=true;
		p.style.opacity="1.0";
		p.disabled=false;
	}

}

function displayImage(option) {

	var imageValue = option.value;
	var imageSource = "../img/arts/art" + imageValue + ".jpeg";
	document.getElementById('art').value=imageValue;
	document.getElementById('art').src=imageSource;

	disableFunction(imageValue);
}

function prevDisable() {
	document.getElementById("prev").disabled= true;
	var element = document.getElementById("prev");
	element.style.opacity="0.3";

}