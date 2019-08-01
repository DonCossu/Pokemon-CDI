function entreePorte(direction) {
	stopBouger = true;

if(direction == 'haut') {
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
		
		$("#divPerso").css("background-image", "url(\"img/heros/haut.png\")");
	});

	marTop = maNew;
	y--;
		
	$("#divPerso").css("margin-top", maNew);
	pasActuelHaut++;

	
 	$( "#changementPorte" ).show(tempsOuverturePorte, function() { // ON AFFICHE L'ECRAN NOIR (tpsOuverturePte défini dans utilities.js)
 
    	changerMap(x, y, mapActuelle, batActuel); 				// ON CHANGE DE MAP 	

 		var attenteEnDeuspi = setTimeout(function(){			// ON ATTEND EN DEUS
 			$( "#changementPorte" ).hide(tempsOuverturePorte, function() { // ET ON CACHE L'ECRAN NOIR (PR AFFICHER NOUVELLE MAP)
 				
 			});
 		}, 150);
    	
 	});		

 	
}

else if(direction == 'bas') {
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
				
				$("#divPerso").css("background-image", "url(\"img/heros/bas.png\")");
			});

			$("#divPerso").css("margin-top", marTop);
			pasActuelBas++;

	

	 	$( "#changementPorte" ).show(tempsOuverturePorte, function() { // ON AFFICHE L'ECRAN NOIR (tpsOuverturePte défini dans utilities.js)
	 		
	    	changerMap(x, y, mapActuelle, batActuel); 								

	 		var attenteEnDeuspi = setTimeout(function(){			// ON ATTEND EN DEUS
	 			$( "#changementPorte" ).hide(tempsOuverturePorte, function() { // ET ON CACHE L'ECRAN NOIR (PR AFFICHER NOUVELLE MAP)
	 				
	 			});
	 		}, 150);
	    	
	 	});
	 

	
}

else if(direction == 'droite') {
			
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

	

	 	$( "#changementPorte" ).show(tempsOuverturePorte, function() { // ON AFFICHE L'ECRAN NOIR (tpsOuverturePte défini dans utilities.js)
	 		
	    	changerMap(x, y, mapActuelle, batActuel); 								

	 		var attenteEnDeuspi = setTimeout(function(){			// ON ATTEND EN DEUS
	 			$( "#changementPorte" ).hide(tempsOuverturePorte, function() { // ET ON CACHE L'ECRAN NOIR (PR AFFICHER NOUVELLE MAP)
	 				
	 			});
	 		}, 150);
	    	
	 	});
	 

	 
}

} // FIN FONCTION
