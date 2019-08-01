function changerMap(monX, monY, maMap, monBat) {

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////     BOURG PALETTE     /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

	// MAISON RED => BOURG PALETTE
	if((monX == 3 && monY == 7 && maMap == 'bourgPalette' && monBat == "maisonRed") || 
		(monX == 4 && monY == 7 && maMap == 'bourgPalette' && monBat == "maisonRed")) 
	{
		
		marLeft = 459.6;
		marTop = -431.8;
		mouvementX = 26.7;
		mouvementY = 26.8;
		entrainDeMarcher = false;
		pasActuelBas = 1;
		pasActuelHaut = 1;
		stopBouger = false;
		tempsDeplacement = 210;
		texteOuvert = false;
		mapActuelle = "bourgPalette";
		batActuel = "aucun";

		x = 5;
		y = 9;
		xVue = 5;
		yVue = 10;
		

		$("#divPerso").css("background-image", "url(\"img/heros/bas.png\")");
		$("#divPerso").css("margin-left", "459.6px");
		$("#divPerso").css("margin-top", "-431.8px");
		$("#mapJeu").css("background-image", "url(\"img/maps/bourgpalette.jpg\")");
		$("#mapJeu").css("height", "100%");
		$("#divTexte").css("margin-top", "-140px");


		$("#divMeufBase").css("display", "block");
		$("#divMecGros").css("display", "block");
		$("#gpPalette").css("display", "none");
		

		document.title = "BOURG PALETTE";
		creerMurs("bourgPalette");
		creerPortes("bourgPalette");
		creerPanneaux("bourgPalette");
		creerObjets("bourgPalette");
	
	}
	
	// MAISON BLUE => BOURG PALETTE
	if((monX == 3 && monY == 7 && maMap == 'bourgPalette' && monBat == "maisonBlue") || 
		(monX == 4 && monY == 7 && maMap == 'bourgPalette' && monBat == "maisonBlue")) 
	{
		
		marLeft = 673.2;
		marTop = -431.8;
		mouvementX = 26.7;
		mouvementY = 26.8;
		entrainDeMarcher = false;
		pasActuelBas = 1;
		pasActuelHaut = 1;
		stopBouger = false;
		tempsDeplacement = 210;
		texteOuvert = false;
		mapActuelle = "bourgPalette";
		batActuel = "aucun";
		
		x = 13;
		y = 9;
		xVue = 13;
		yVue = 10;

		$("#divPerso").css("background-image", "url(\"img/heros/bas.png\")");
		$("#divPerso").css("margin-left", "673.20px");
		$("#divPerso").css("margin-top", "-431.8px");
		$("#mapJeu").css("background-image", "url(\"img/maps/bourgpalette.jpg\")");
		$("#mapJeu").css("height", "100%");
		$("#divTexte").css("margin-top", "-140px");


		$("#divMeufBase").css("display", "block");
		$("#divMecGros").css("display", "block");
		$("#gpPalette").css("display", "none");
		

		document.title = "BOURG PALETTE";
		creerMurs("bourgPalette");
		creerPortes("bourgPalette");
		creerPanneaux("bourgPalette");
		creerObjets("bourgPalette");
	
	}


	// BOURG PALETTE => MAISON RED
	else if(monX == 5 && monY == 8 && maMap == 'bourgPalette' && monBat == "aucun") {
		marLeft = 567.3;
		marTop = -26.8;
		mouvementX = 26.7;
		mouvementY = 26.8;
		entrainDeMarcher = false;
		pasActuelBas = 1;
		pasActuelHaut = 1;
		stopBouger = false;
		tempsDeplacement = 210;
		texteOuvert = false;
		mapActuelle = "bourgPalette";
		batActuel = "maisonRed";

		x = 4;
		y = 7;
		xVue = 4;
		yVue = 6;
		

		$("#divPerso").css("background-image", "url(\"img/heros/haut.png\")");
		$("#divPerso").css("margin-left", "567.3px");
		$("#divPerso").css("margin-top", "-26.8px");
		$("#mapJeu").css("background-image", "url(\"img/maps/maison.jpg\")");
		$("#mapJeu").css("height", "215px");
		$("#divTexte").css("margin-top", "295px");


		$("#divMeufBase").css("display", "none");
		$("#divMecGros").css("display", "none");
		$("#gpPalette").css("display", "block");
		

		document.title = "Maison de RED";
		creerMurs("maisonRed");
		creerPortes("maisonRed");
		creerPanneaux("maisonRed");
		creerObjets("maisonRed");
	
	}

	// MAISON RED => CHAMBRE RED
	else if(monX == 8 && monY == 1 && maMap == 'bourgPalette' && monBat == "maisonRed") 
	{
		marLeft = 674.1;
		marTop = -187.60;
		mouvementX = 26.7;
		mouvementY = 26.8;
		entrainDeMarcher = false;
		pasActuelBas = 1;
		pasActuelHaut = 1;
		stopBouger = false;
		tempsDeplacement = 210;
		texteOuvert = false;
		mapActuelle = "bourgPalette";
		batActuel = "chambreRed";

		x = 8;
		y = 1;
		xVue = 8;
		yVue = 2;
		

		$("#divPerso").css("background-image", "url(\"img/heros/bas.png\")");
		$("#divPerso").css("margin-left", "674px");
		$("#divPerso").css("margin-top", "-187.6px");
		$("#mapJeu").css("background-image", "url(\"img/maps/chambrered.jpg\")");
		$("#mapJeu").css("height", "215px");
		$("#divTexte").css("margin-top", "295px");


		$("#gpPalette").css("display", "none");
		

		document.title = "Maison de RED - Chambre";
		creerMurs("chambreRed");
		creerPortes("chambreRed");
		creerPanneaux("chambreRed");
		creerObjets("chambreRed");
	
	}

	// CHAMBRE RED => MAISON RED
	else if(monX == 8 && monY == 1 && maMap == 'bourgPalette' && monBat == "chambreRed") 
	{
		marLeft = 674.1;
		marTop = -187.60;
		mouvementX = 26.7;
		mouvementY = 26.8;
		entrainDeMarcher = false;
		pasActuelBas = 1;
		pasActuelHaut = 1;
		stopBouger = false;
		tempsDeplacement = 210;
		texteOuvert = false;
		mapActuelle = "bourgPalette";
		batActuel = "maisonRed";

		x = 8;
		y = 1;
		xVue = 8;
		yVue = 2;
		

		$("#divPerso").css("background-image", "url(\"img/heros/bas.png\")");
		$("#divPerso").css("margin-left", "674.1px");
		$("#divPerso").css("margin-top", "-187.60px");
		$("#mapJeu").css("background-image", "url(\"img/maps/maison.jpg\")");
		$("#mapJeu").css("height", "215px");
		$("#divTexte").css("margin-top", "295px");


		$("#divMeufBase").css("display", "none");
		$("#divMecGros").css("display", "none");
		$("#gpPalette").css("display", "block");
		

		document.title = "Maison de RED";
		creerMurs("maisonRed");
		creerPortes("maisonRed");
		creerPanneaux("maisonRed");
		creerObjets("maisonRed");
	
	}

	// BOURG PALETTE => MAISON BLUE
	else if(monX == 13 && monY == 8 && maMap == 'bourgPalette' && monBat == "aucun") {
		marLeft = 567.3;
		marTop = -26.8;
		mouvementX = 26.7;
		mouvementY = 26.8;
		entrainDeMarcher = false;
		pasActuelBas = 1;
		pasActuelHaut = 1;
		stopBouger = false;
		tempsDeplacement = 210;
		texteOuvert = false;
		mapActuelle = "bourgPalette";
		batActuel = "maisonBlue";

		x = 4;
		y = 7;
		xVue = 0;
		yVue = 0;
		

		$("#divPerso").css("background-image", "url(\"img/heros/haut.png\")");
		$("#divPerso").css("margin-left", "567.3px");
		$("#divPerso").css("margin-top", "-26.8px");
		$("#mapJeu").css("background-image", "url(\"img/maps/bluehouse.jpg\")");
		$("#mapJeu").css("height", "215px");
		$("#divTexte").css("margin-top", "295px");


		$("#divMeufBase").css("display", "none");
		$("#divMecGros").css("display", "none");
		

		document.title = "Maison de BLUE";
		creerMurs("maisonBlue");
		creerPortes("maisonBlue");
		creerPanneaux("maisonBlue");
		creerObjets("maisonBlue");
	
	}


	// BOURG PALETTE => LABO CHEN
	else if(monX == 12 && monY == 14 && maMap == 'bourgPalette' && monBat == "aucun") {
		marLeft = 593;
		marTop = -30;
		mouvementX = 26.7;
		mouvementY = 26.8;
		entrainDeMarcher = false;
		pasActuelBas = 1;
		pasActuelHaut = 1;
		stopBouger = false;
		tempsDeplacement = 210;
		texteOuvert = false;
		mapActuelle = "bourgPalette";
		batActuel = "laboChen";

		x = 6;
		y = 11;
		xVue = 6;
		yVue = 10;
		

		$("#divPerso").css("background-image", "url(\"img/heros/haut.png\")");
		$("#divPerso").css("margin-left", "593px");
		$("#divPerso").css("margin-top", "-30px");
		$("#mapJeu").css("background-image", "url(\"img/maps/laboChen.jpg\")");
		$("#mapJeu").css("height", "330px");
		$("#divTexte").css("margin-top", "180px");


		$("#divMeufBase").css("display", "none");
		$("#divMecGros").css("display", "none");
		$("#profChen").css("display", "block");
		$("#profChen").css("background-image", "url(\"img/persos/chen/bas.png\")");
		$("#divPikachu").css("display", "block");
		

		document.title = "Labo de CHEN";
		creerMurs("laboChen");
		creerPortes("laboChen");
		creerPanneaux("laboChen");
		creerObjets("laboChen");
	
	}



	// LABO CHEN => BOURG PALETTE
	else if((monX == 5 && monY == 11 && maMap == 'bourgPalette' && monBat == "laboChen") || 
	(monX == 6 && monY == 11 && maMap == 'bourgPalette' && monBat == "laboChen")) 
	{
		marLeft = 646.5;
		marTop = -271;
		mouvementX = 26.7;
		mouvementY = 26.8;
		entrainDeMarcher = false;
		pasActuelBas = 1;
		pasActuelHaut = 1;
		stopBouger = false;
		tempsDeplacement = 210;
		texteOuvert = false;
		mapActuelle = "bourgPalette";
		batActuel = "aucun";

		x = 12;
		y = 15;
		xVue = 12;
		yVue = 16;
		

		$("#divPerso").css("background-image", "url(\"img/heros/bas.png\")");
		$("#divPerso").css("margin-left", "646.5px");
		$("#divPerso").css("margin-top", "-271px");
		$("#mapJeu").css("background-image", "url(\"img/maps/bourgpalette.jpg\")");
		$("#mapJeu").css("height", "100%");
		$("#divTexte").css("margin-top", "-140px");
		
		$("#divMeufBase").css("display", "block");
		$("#divMecGros").css("display", "block");
		$("#profChen").css("display", "none");
		$("#divPikachu").css("display", "none");


		document.title = "BOURG PALETTE";
		creerMurs("bourgPalette");
		creerPortes("bourgPalette");
		creerPanneaux("bourgPalette");
		creerObjets("bourgPalette");
	
	}





}






/////////////////////////////////// POUR AJOUTER MAP ///////////////////////////////////////

// 1 - Placer la découpe dans /maps/
// 2 - Ajouter la porte d'accès à la map dans coordooneesPortes.js
// 3 - Ajouter les coordonnes de cette porte plus haut dans le document (function changerMap()) 
// 4 - Réajuster les marges selon la map, où on apparait,
//     les persos qui apparaissent/disparaissent ...
// 5 - Créer les murs, portes et panneaux de la map 
// 6 - Créer la porte de sortie de cette map



