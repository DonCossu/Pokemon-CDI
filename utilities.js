function afficheXY() {
	alert(arrayObjets);
	// alert("X : "+x+" / Y : "+y);
}

function afficheXYm() {
	alert("X : "+meufBasePalette.x+" / Y : "+meufBasePalette.y);
}

function afficheMarge() {
	alert("Left: "+marLeft+" / Top : "+marTop);
}

function afficheXYVue() {
	alert("Xvue : "+xVue+" / Yvue : "+yVue);
}




function nbrRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}




var myWindow;

function openWin() {
  myWindow = window.open("index.html", "", "width=1180, height=670");
}

function resizeWin() {
  myWindow.resizeTo(600, 800);
  myWindow.focus();
}



/////////////////// AUTRES /////////////////// 

var tempsOuverturePorte = 400; // utilisé dans déplacementPortes.js


