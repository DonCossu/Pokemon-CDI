
function touchePressee(direction) {
if(entrainDeMarcher == false) {
if(stopBouger == false)
{	
	if(direction == 'gauche') { // GAUCHE
		$("#divPerso").css("background-image", "url(\"img/heros/gauche1.png\")");
		entrainDeMarcher = true;
		var maNew = marLeft - mouvementX;

		$( "#divPerso" ).animate({
			marginLeft: maNew
		}, tempsDeplacement, function() {
			entrainDeMarcher = false;
			$("#divPerso").css("background-image", "url(\"img/heros/gauche.png\")");
		});

		marLeft = maNew;
		x--;
		
		$("#divPerso").css("margin-left", maNew);
	}

	else if(direction == 'haut') { // HAUT
		if(pasActuelHaut % 2 == 0) {
			$("#divPerso").css("background-image", "url(\"img/heros/haut1.png\")");
		}
		else {
			$("#divPerso").css("background-image", "url(\"img/heros/haut2.png\")");
		}
		entrainDeMarcher = true;
		var maNew = marTop - mouvementY;

		$( "#divPerso" ).animate({
			marginTop: maNew
		}, tempsDeplacement, function() {
			entrainDeMarcher = false;
			$("#divPerso").css("background-image", "url(\"img/heros/haut.png\")");
		});

		marTop = maNew;
		y--;
		
		$("#divPerso").css("margin-top", maNew);
		pasActuelHaut++;
	}

	else if(direction == 'droite') { // DROITE
		$("#divPerso").css("background-image", "url(\"img/heros/droite1.png\")");
		entrainDeMarcher = true;
		var maNew = marLeft + mouvementX;

		$( "#divPerso" ).animate({
			marginLeft: maNew
		}, tempsDeplacement, function() {
			entrainDeMarcher = false;
			$("#divPerso").css("background-image", "url(\"img/heros/droite.png\")");		
		});

		marLeft = maNew;
		x++;
		
		$("#divPerso").css("margin-left", maNew);

	}

	else if(direction == 'bas') { // BAS
		if(pasActuelBas % 2 == 0) {
			$("#divPerso").css("background-image", "url(\"img/heros/bas1.png\")");
		}
		else {
			$("#divPerso").css("background-image", "url(\"img/heros/bas2.png\")");
		}
		entrainDeMarcher = true;
		var maNew = marTop + mouvementY;

		$( "#divPerso" ).animate({
			marginTop: maNew
		}, tempsDeplacement, function() {
			entrainDeMarcher = false;
			$("#divPerso").css("background-image", "url(\"img/heros/bas.png\")");
		});

		marTop = maNew;
		y++;

		$("#divPerso").css("margin-top", maNew);
		pasActuelBas++;



	}

	
} // test stopBouger
} // test entrainDeMarcher
} // fin de la function touchePressee()



