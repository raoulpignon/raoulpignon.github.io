let myImage = document.querySelector('img');
let myButton = document.querySelector('button');

myButton.onclick = function() {
	myImage.setAttribute('src', 'images/stop.png');
	prompt("name ");
}

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/poker.jpg'){
		myImage.setAttribute('src', 'images/bike.jpg');
	}else{
		myImage.setAttribute('src', 'images/poker.jpg');
	}
}




