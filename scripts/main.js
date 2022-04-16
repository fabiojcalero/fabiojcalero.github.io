let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/SR-Value-D.jpeg') {
		myImage.setAttribute('src', 'images/1685914.jpg');
	} else {
		myImage.setAttribute('src', 'images/SR-Value-D.jpeg');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName){
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Renewable energy is cool, ' + myName;
	}	
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Renewable energy is cool, ' + storedName;
}

myButton.onclick = () => {
	setUserName();
}