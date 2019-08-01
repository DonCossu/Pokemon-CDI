
// POUR AFFICHER X ET Y
function yolo() {

	if(event.which == 65) // A pressé
	{
		afficheXY();
	}
	else if(event.which == 90) // Z pressé
	{
		afficheMarge();
	}

	else if(event.which == 69) // E pressé
	{
		afficheXYVue();
	}
}





var monBody = document.querySelector('body');
monBody.addEventListener('keydown', verifSiMur); // deplacementbloquage.js
monBody.addEventListener('keydown', Action); // boutonaction.js
monBody.addEventListener('keydown', yolo); // PR AFFICHER X ET Y

creerObjets('bourgPalette'); // lancer de base pour que l'array arrayObjets existe






