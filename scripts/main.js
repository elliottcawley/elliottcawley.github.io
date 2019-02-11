var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/league-2.jpg') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/league-2.jpg');
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome, ' + myName + ' to your home of league 2 football';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
 
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome, ' + storedName + ' to your home of league 2 football';
}

myButton.onclick = function() {
  setUserName();
}