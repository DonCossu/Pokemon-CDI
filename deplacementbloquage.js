

function verifSiMur($direction) { 

	// Fais les tests de coordonnées dans coordonneesMurs.js



if(stopBouger == false) {

	if(event.which == 40) // BAS
	{	
		// Sert pour savoir si mur 
		var newX = x;
		var newY = y + 1;
		
		var coordonneesFinales = newX+'-'+newY;
		

		if(murs.indexOf(coordonneesFinales) == -1 && arrayObjets.indexOf(coordonneesFinales) == -1) { // Si pas de mur et pas d'objet
			if(portes.indexOf(coordonneesFinales) == -1) { // Si pas de porte
				touchePressee("bas");
			}
			else {
				entreePorte("bas");
			}
		}
		else { 
			stopBouger = true;
			if(pasActuelBas % 2 == 0) {
				$("#divPerso").css("background-image", "url(\"img/heros/bas1.png\")");
			}
			else {
				$("#divPerso").css("background-image", "url(\"img/heros/bas2.png\")");
			}
			entrainDeMarcher = true;
			var maNew = marTop + 1;

			$( $("#divPerso") ).animate({
				marginTop: maNew
			}, 300, function() {
				entrainDeMarcher = false;
				$("#divPerso").css("background-image", "url(\"img/heros/bas.png\")");
			});

			$("#divPerso").css("margin-top", marTop);
			pasActuelBas++;

			var attenteEnDeuspi = setTimeout(function(){// ON ATTEND EN DEUS
	 			// fin du timeout
	 			stopBouger = false;
	 		}, 500);	

		}
		xVue = x;
		yVue = y + 1;
	}
	else if(event.which == 39) { // DROITE
		var newX = x + 1;
		var newY = y;
		
		var coordonneesFinales = newX+'-'+newY;

		if(murs.indexOf(coordonneesFinales) == -1 && arrayObjets.indexOf(coordonneesFinales) == -1) { // Si pas de mur et pas d'objet
			if(portes.indexOf(coordonneesFinales) == -1) { // Si pas de porte
				touchePressee("droite");
			}
			else {
				entreePorte("droite");
			}
		}
		else {
			stopBouger = true;
			$("#divPerso").css("background-image", "url(\"img/heros/droite1.png\")");
			entrainDeMarcher = true;
			var maNew = marLeft + 1;

			$( "#divPerso" ).animate({
				marginLeft: maNew
			}, 280, function() {
			entrainDeMarcher = false;
			$("#divPerso").css("background-image", "url(\"img/heros/droite.png\")");		
			});

			$("#divPerso").css("margin-left", marLeft);

			var attenteEnDeuspi = setTimeout(function(){// ON ATTEND EN DEUS
	 			// fin du timeout
	 			stopBouger = false;
	 		}, 500);

		}
		xVue = x + 1;
		yVue = y;
	} 
	else if(event.which == 38) { // HAUT
		var newX = x;
		var newY = y - 1;
		
		var coordonneesFinales = newX+'-'+newY;

		if(murs.indexOf(coordonneesFinales) == -1 && arrayObjets.indexOf(coordonneesFinales) == -1) { // Si pas de mur et pas d'objet
			if(portes.indexOf(coordonneesFinales) == -1) { // Si pas de porte
				touchePressee("haut");
			}
			else {
				entreePorte("haut");
			}
			
		}
		else {
			stopBouger = true;
			if(pasActuelHaut % 2 == 0) {
			$("#divPerso").css("background-image", "url(\"img/heros/haut1.png\")");
			}
			else {
				$("#divPerso").css("background-image", "url(\"img/heros/haut2.png\")");
			}
			entrainDeMarcher = true;
			var maNew = marTop - 1;

			$( "#divPerso" ).animate({
				marginTop: maNew
			}, 300, function() {
				entrainDeMarcher = false;
				$("#divPerso").css("background-image", "url(\"img/heros/haut.png\")");
			});

			$("#divPerso").css("margin-top", marTop);
			pasActuelHaut++;

			var attenteEnDeuspi = setTimeout(function(){// ON ATTEND EN DEUS
	 			// fin du timeout
	 			stopBouger = false;
	 		}, 500);

		}
		xVue = x;
		yVue = y - 1;
	} 
	else if(event.which == 37) { // GAUCHE
		var newX = x - 1;
		var newY = y;
		
		var coordonneesFinales = newX+'-'+newY;

		if(murs.indexOf(coordonneesFinales) == -1 && arrayObjets.indexOf(coordonneesFinales) == -1) { // Si pas de mur et pas d'objet
			touchePressee("gauche");
		}
		else {
			stopBouger = true;
			$("#divPerso").css("background-image", "url(\"img/heros/gauche1.png\")");
			entrainDeMarcher = true;
			var maNew = marLeft - 1;

			$( "#divPerso" ).animate({
				marginLeft: maNew
			}, 280, function() {
			entrainDeMarcher = false;
			$("#divPerso").css("background-image", "url(\"img/heros/gauche.png\")");		
			});

			$("#divPerso").css("margin-left", marLeft);

			var attenteEnDeuspi = setTimeout(function(){// ON ATTEND EN DEUS
	 			// fin du timeout
	 			stopBouger = false;
	 		}, 500);

	 		
		}
		xVue = x - 1;
		yVue = y;
	}
} // test stopBouger
} // fin de la function verifSiMur