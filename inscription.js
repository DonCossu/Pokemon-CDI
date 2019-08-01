
function dialogueChenSubscribe() { // LANCEE DANS lancerInscription() QUAND CHEN EST AFFICHE
	
	if(event.which == 68 && peutCliquer == true) {  // SI "D" PRESSE
		// PREMIER MESSAGE DE CHEN

		if(compteurTxt == 0) { 
			$("#divTexte").html(texteChen[1]);
			compteurTxt++;
		}

		else if(compteurTxt == 1) { 
			$("#divTexte").html(texteChen[2]);
			compteurTxt++;
		}


		else if(compteurTxt == 2) { // ON LANCE LE FORMULAIRE POUR LE PSEUDO
			entrerDonneesFormulaire('pseudo');
			compteurTxt++;
		}


		else if(compteurTxt == 5) { // APRES PSEUDO ET MDP RECUPERES
			$("#divTexte").html(texteChen[4]);
			compteurTxt++;
		}

	

	} // FIN DE "D"

	

	else if(event.which == 13 && peutCliquer == true) { // SI "ENTREE" PRESSEE, POUR LES FORMULAIRES
		if(compteurTxt == 3) { // Si on a rentré le pseudo pseudo 
			pseudoSaisi = $('input.pseudo').val(); 
			entrerDonneesFormulaire('motdepasse');
			compteurTxt++;
		} 

		else if(compteurTxt == 4) { // Si on a rentré le mdp 
			mdpSaisi = $('input.motdepasse').val(); 
			$("#affichage").css('display', 'none');
			texteChen[3] = pseudoSaisi+', donc ?';
			$("#divTexte").html(texteChen[3]);
			compteurTxt++;
		} 
	} // FIN DE "ENTREE"

}



function lancerInscription() { // LANCEE EN FIN DE FICHIER

	var vitesseAnimChen = 90;
	var attenteDeBase = 1000;

	var timerOne = setTimeout(function() { // ATTENTE DE BASE

	 $("#chen").css("display", "block");
		var attenteEnDeuspi = setTimeout(function(){ // ON ATTEND EN DEUS
		 $("#chen").css("background-image", "url(\"img/inscription/chens/2.png\")");

		 	attenteEnDeuspi = setTimeout(function(){ // ON ATTEND EN DEUS
		 	$("#chen").css("background-image", "url(\"img/inscription/chens/3.png\")");

		 		attenteEnDeuspi = setTimeout(function(){ // ON ATTEND EN DEUS
		 		$("#chen").css("background-image", "url(\"img/inscription/chens/4.png\")");
		 		
		 			attenteEnDeuspi = setTimeout(function(){ // ON ATTEND EN DEUS
		 			$("#chen").css("background-image", "url(\"img/inscription/chens/5.png\")");


		 			

		 			attenteEnDeuspi = setTimeout(function(){ // ON ATTEND AVANT D'AFFICHER LE TEXTE
			 			// CHEN EST AFFICHE, ON AFFICHE LA ZONE TXT ET ON LANCE LE DIALOGUE
			 			peutCliquer = true;
			 			$("#divTexte").css("display", "block");
			 			$("#divTexte").html(texteChen[0]);
		 			}, attenteDebutAffichDialogue);



		 			}, vitesseAnimChen);	
		 		}, vitesseAnimChen);	
		 	}, vitesseAnimChen);	
		}, vitesseAnimChen);


	}, attenteDeBase)



} // FIN FONCTION lancerInscription()



function entrerDonneesFormulaire(donnee) { // POUR RECUPERER DES DONNEES ENTREES VIA FORM
	if(donnee == 'pseudo') {
		$("#divTexte").html('<form action="" method="post"><input type="text" name="pseudo" class="pseudo" /><input type="text" style="display: none;"></form>');
		$("#affichage").css('display', 'block');
		$("#affichage").html('Entrer pseudo :');
		
	}
	else if(donnee == 'motdepasse') {
		
		$("#divTexte").html('<form action="" method="post"><input type="password" name="motdepasse" class="motdepasse" /><input type="text" style="display: none;"></form>');
		$("#affichage").css('display', 'block');
		$("#affichage").html('Entrer mot de passe :');
	}

}


//////////////////////////////////////////////////////////////////////////////////////

var peutCliquer = false;
var compteurTxt = 0;
var vitesseAnimChen = 90; // ENCHAINEMENT DES SPRITES
var attenteDeBase = 1000; // AVANT DE LANCER L'ANIMATION
var attenteDebutAffichDialogue = 500; // ENTRE CHEN AFFICHÉ ET PREMIER DIALOGUE AFFICHÉ
var pseudoSaisi;
var mdpSaisi;

var texteChen = [
				'Pour affronter d\'autres talentueux dresseurs,',
				'tu vas devoir me donner ton nom, et ton mot de',
				'passe.',
				'', // réécrit dans event "espace" : on cite le pseudo du type "pseudo, tu dis ?"
				'Bien, nous allons voir ce que tu vaux.'
				];


var monBody = document.querySelector('body');
monBody.addEventListener('keydown', dialogueChenSubscribe); 

// ON LANCE L'INSCRIPTION
lancerInscription();