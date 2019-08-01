
class Objet {
	constructor(xObjet, yObjet, marLeftObjet, marTopObjet, mapObjet, batObjet, trouvaille) {
			this.x = xObjet;
			this.y = yObjet;
			this.marLeft = marLeftObjet;
			this.marTop = marTopObjet;
			this.mapObjet = mapObjet;
			this.batObjet = batObjet;
			this.texteTrouve = trouvaille;
			this.recupered = false;
			var meine = this;
		}		

}


function ajouterObjetInventaire(objet) { // QUAND ON RECUP DANS LE JEU
	if(objet == 'biere') {
		$("#divTexte").css("display", "block");
		$("#divTexte").html(biere.texteTrouve);
		inventaire[0]++;
		$('#biered').html(inventaire[0]);
		$('#biere').css("display", 'flex');
		$('#greenball').css("display", 'none');
		biere.recupered = true;
		creerMurs('chambreRed');
	}
}


function creerObjets(lieu) { // POUR CREER SUR LA MAP
	if(lieu == "chambreRed") {
		if(biere.recupered == false) {
			arrayObjets = [
			''+biere.x+'-'+biere.y+''
			];
			$("#greenball").css("display", "block");
			$("#greenball").css("margin-left", biere.marLeft);
			$("#greenball").css("margin-top", biere.marTop);
		}
	}
	else // SI PAS D'OBJET DANS LA PIECE
	{
		arrayObjets = [
						'999-999' // Faux x-y parce qu'arrayObjets a besoin d'exister
						];


		// FAIT DISPARAITRE TOUS LES OBJETS (DONC BALLS) POSSIBLES /!\ RAJOUTER LES AUTRES QUAND BESOIN PLUS TARD
		$("#greenball").css("display", "none"); 
	}
}




//////////////////////////////////////////////////////////////////
////////////////////   DECLARATION DES OBJETS   //////////////////
//////////////////////////////////////////////////////////////////

var arrayObjets; // équivaut à l'array murs ou portes pour répertorier les x-y pour deplacementbloquage.js

// A CHAQUE NOUVEL OBJET : 
// 1 - Instancer ici
// 2 - Créer HTML / CSS
// 3 - Ajouter dans créerObjets plus haut ici
// 4 - Ajouter action dans boutonAction.js
// 5 - 


var biere = new Objet(2, 1, 513.90, -198.6, 'bourgPalette', 'chambreRed', 'Le CDI ! Parfait, j\'suis chaud comme la braise !');