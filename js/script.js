function setValuesToSession(){
	var elements = document.getElementsByClassName("input");
		for (var i = 0; i < elements.length; i++) {	
			sessionStorage.setItem(elements[i].name, elements[i].value);
		}
}

function getValuesFromSession(){
	for (var i = 0; i < sessionStorage.length; i++) {
		var key = sessionStorage.key(i);
		var value = sessionStorage.getItem(key);
		document.getElementById('container').innerHTML="<p>"+document.getElementById('container').innerHTML+`${key} - ${value}`+"</p>";
	}
}


	
	