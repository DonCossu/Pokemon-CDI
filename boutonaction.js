function Action() {


if(stopBouger == false || (stopBouger == true && texteOuvert == true)) // ON PEUT BOUGER 
{


	if(event.which == 68) { // IF TOUCHE "D" PRESSEE


///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////     BOURG PALETTE     /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////// EXTERIEUR ///////////////////////////////////////////
	
	if(mapActuelle == "bourgPalette" && batActuel == "aucun")
	{
		// MEUF 
		if(xVue == meufBasePalette.x && yVue == meufBasePalette.y) 
		{
			if(texteOuvert == false) { // SI Y'AVAIT AUCUN TEXTE D'OUVERT ON OUVRE

				texteOuvert = true;
				meufBasePalette.parler('meufbasePalette');
				stopBouger = true;
				clearInterval(meufBasePalette.timerAFK);
			}
			else { // SINON ON FERME LE TEXTE
				
				$("#divTexte").css("display", "none");
				texteOuvert = false;
				stopBouger = false;
					// Lancer l'AFK pour chaque perso
				meufBasePalette.AFKAleatoire();
			}

		}



		// GROS
		if(xVue == mecGrosPalette.x && yVue == mecGrosPalette.y) 
		{
			if(texteOuvert == false) { // SI Y'AVAIT AUCUN TEXTE D'OUVERT ON OUVRE
				texteOuvert = true;
				mecGrosPalette.parler('mecGrosPalette1');
				stopBouger = true;
				clearInterval(mecGrosPalette.timerAFK);
			}
			else { // SINON ON FERME LE TEXTE
				
				$("#divTexte").css("display", "none");
				texteOuvert = false;
				stopBouger = false;
					// Lancer l'AFK pour chaque perso
				mecGrosPalette.AFKAleatoire();
			}
		}


		// Panneau maison de Red
		if(xVue == panneauMaisonRed.x && yVue == panneauMaisonRed.y) 
		{
			if(texteOuvert == false) { // SI Y'AVAIT AUCUN TEXTE D'OUVERT ON OUVRE
				texteOuvert = true;
				panneauMaisonRed.parler();
				stopBouger = true;
			}
			else { // SINON ON FERME LE TEXTE
				
				$("#divTexte").css("display", "none");
				texteOuvert = false;
				stopBouger = false;
			}
		}

		// Panneau maison de Blue
		if(xVue == panneauMaisonBlue.x && yVue == panneauMaisonBlue.y) 
		{
			if(texteOuvert == false) { // SI Y'AVAIT AUCUN TEXTE D'OUVERT ON OUVRE
				texteOuvert = true;
				panneauMaisonBlue.parler();
				stopBouger = true;
			}
			else { // SINON ON FERME LE TEXTE
				
				$("#divTexte").css("display", "none");
				texteOuvert = false;
				stopBouger = false;
			}
		}


		// Panneau gauche labo
		if(xVue == panneauGaucheLabo.x && yVue == panneauGaucheLabo.y) 
		{
			if(texteOuvert == false) { // SI Y'AVAIT AUCUN TEXTE D'OUVERT ON OUVRE
				texteOuvert = true;
				panneauGaucheLabo.parler();
				stopBouger = true;
			}
			else { // SINON ON FERME LE TEXTE
				
				$("#divTexte").css("display", "none");
				texteOuvert = false;
				stopBouger = false;
			}
		}

		// Panneau Chen
		if(xVue == panneauChen.x && yVue == panneauChen.y) 
		{
			if(texteOuvert == false) { // SI Y'AVAIT AUCUN TEXTE D'OUVERT ON OUVRE
				texteOuvert = true;
				panneauChen.parler();
				stopBouger = true;
			}
			else { // SINON ON FERME LE TEXTE
				
				$("#divTexte").css("display", "none");
				texteOuvert = false;
				stopBouger = false;
			}
		}


	}



///////////////////////////////////////////// MAISON RED ///////////////////////////////////////////
	
	if(mapActuelle == "bourgPalette" && batActuel == "maisonRed")
	{
		// GRAND PERE
		if(xVue == gpPalette.x && yVue == gpPalette.y) 
		{
			if(texteOuvert == false && compteurTexte == 0) { // SI Y'AVAIT AUCUN TEXTE D'OUVERT ON OUVRE
				texteOuvert = true;
				gpPalette.parler('gpPalette1');
				stopBouger = true;
				clearInterval(gpPalette.timerAFK);
				compteurTexte++; // Plusieurs dialogues donc on incrémente
			}
			else if(texteOuvert == true && compteurTexte == 1) { // Deuxième texte
				gpPalette.parler('gpPalette2');
				stopBouger = true;
				compteurTexte++;
			}
			else if(texteOuvert == true && compteurTexte == 2) { // Deuxième texte
				gpPalette.parler('gpPalette3');
				stopBouger = true;
				compteurTexte++;
			}
			else { // SINON ON FERME LE TEXTE
				
				$("#divTexte").css("display", "none");
				texteOuvert = false;
				stopBouger = false;
					// Lancer l'AFK pour chaque perso
				gpPalette.AFKAleatoire();

				compteurTexte = 0; // On remet à 0

				if(inventaire[0] > 0) { // A LA FIN DU TEXTE, QUAND ON A UNE BIERE
					redirectToInscription(); // ON LANCE L'INSCRIPTION
				}
			}
		}


		// TV chez RED
		if(xVue == panneauTVRed.x && yVue == panneauTVRed.y) 
		{
			if(texteOuvert == false) { // SI Y'AVAIT AUCUN TEXTE D'OUVERT ON OUVRE
				texteOuvert = true;
				panneauTVRed.parler();
				stopBouger = true;
			}
			else { // SINON ON FERME LE TEXTE
				
				$("#divTexte").css("display", "none");
				texteOuvert = false;
				stopBouger = false;
			}
		}



		// Bibliothèque chez RED
		if(xVue == panneauBibliRedRDC.x && yVue == panneauBibliRedRDC.y) 
		{
			if(texteOuvert == false) { // SI Y'AVAIT AUCUN TEXTE D'OUVERT ON OUVRE
				texteOuvert = true;
				panneauBibliRedRDC.parler();
				stopBouger = true;
			}
			else { // SINON ON FERME LE TEXTE
				
				$("#divTexte").css("display", "none");
				texteOuvert = false;
				stopBouger = false;
			}
		}
		// Bibliothèque 2 chez RED
		if(xVue == panneauBibliRedRDC2.x && yVue == panneauBibliRedRDC2.y) 
		{
			if(texteOuvert == false) { // SI Y'AVAIT AUCUN TEXTE D'OUVERT ON OUVRE
				texteOuvert = true;
				panneauBibliRedRDC2.parler();
				stopBouger = true;
			}
			else { // SINON ON FERME LE TEXTE
				
				$("#divTexte").css("display", "none");
				texteOuvert = false;
				stopBouger = false;
			}
		}



	} // FIN DE MAISON RED


///////////////////////////////////////////// CHAMBRE RED ///////////////////////////////////////////
	
	if(mapActuelle == "bourgPalette" && batActuel == "chambreRed")
	{
		// NES de RED
		if(xVue == panneauNESRed.x && yVue == panneauNESRed.y) 
		{
			if(texteOuvert == false) { // SI Y'AVAIT AUCUN TEXTE D'OUVERT ON OUVRE
				texteOuvert = true;
				panneauNESRed.parler();
				stopBouger = true;
			}
			else { // SINON ON FERME LE TEXTE
				
				$("#divTexte").css("display", "none");
				texteOuvert = false;
				stopBouger = false;
			}
		}

		// Ordi de RED
		if(xVue == panneauOrdiChambreRed.x && yVue == panneauOrdiChambreRed.y) 
		{
			if(texteOuvert == false) { // SI Y'AVAIT AUCUN TEXTE D'OUVERT ON OUVRE
				texteOuvert = true;
				panneauOrdiChambreRed.parler();
				stopBouger = true;
			}
			else { // SINON ON FERME LE TEXTE
				
				$("#divTexte").css("display", "none");
				texteOuvert = false;
				stopBouger = false;
			}
		}


		// BIERE 
		if(xVue == biere.x && yVue == biere.y) 
		{
			if(texteOuvert == false && biere.recupered == false) { // SI BIERE PAS RECUPEREE
				texteOuvert = true;
				ajouterObjetInventaire('biere');
				stopBouger = true; 
			}
			else { // SINON ON FERME LE TEXTE
				
				$("#divTexte").css("display", "none");
				texteOuvert = false;
				stopBouger = false;
			}
		}


	}



///////////////////////////////////////////// LABO CHEN ///////////////////////////////////////////
	
	if(mapActuelle == "bourgPalette" && batActuel == "laboChen")
	{
		// PIKACHU
		if(xVue == monPikachu.x && yVue == monPikachu.y) 
		{
			if(texteOuvert == false) { // SI Y'AVAIT AUCUN TEXTE D'OUVERT ON OUVRE
				texteOuvert = true;
				monPikachu.parler('pikachu1');
				stopBouger = true;
				clearInterval(monPikachu.timerAFK);
			}
			else { // SINON ON FERME LE TEXTE
				
				$("#divTexte").css("display", "none");
				texteOuvert = false;
				stopBouger = false;
				monPikachu.AFKAleatoire();
			}
		}

		// CHEN
		if(xVue == profChen.x && yVue == profChen.y) 
		{
			if(texteOuvert == false && compteurTexte == 0) { // SI Y'AVAIT AUCUN TEXTE D'OUVERT ON OUVRE
				texteOuvert = true;
				profChen.parler('profChen1');
				stopBouger = true;
				compteurTexte++; // Plusieurs dialogues donc on incrémente
			}
			else if(texteOuvert == true && compteurTexte == 1) { // Deuxième texte
				profChen.parler('profChen2');
				stopBouger = true;
				compteurTexte++;
			}
			else { // SINON ON FERME LE TEXTE
				
				$("#divTexte").css("display", "none");
				texteOuvert = false;
				stopBouger = false;
				compteurTexte = 0; // On remet à 0
				chenDeuxiemeTexte = true;
			}
		}

	}












	} // FIN DU IF TOUCHE "D" PRESSEE

} // FIN DE STOPBOUGER

} // Fin function




