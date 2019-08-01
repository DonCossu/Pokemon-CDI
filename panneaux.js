class Panneau {
	constructor(x, y, texte) {
		this.x = x;
		this.y = y;
		this.texte = texte;

	}


	parler() {
			$("#divTexte").css("display", "block");
			$("#divTexte").html(this.texte);
		}


}


//////////////////////////////////////////////////////////////////
////////////////////   DECLARATION DES PANNEAUX   ////////////////
//////////////////////////////////////////////////////////////////


// A CHAQUE NV PANNEAU : 
// 1 - DECLARATION VARIABLE ICI (pour pouvoir être utilisé hors de la function)
// 2 - AJOUTER DANS FONCTON 
// 3 - RAJOUTER SON ACTION POSSIBLE DANS boutonaction.js
// (coordonnees murs censées exister car le panneau est sur un mur)

creerPanneaux("bourgPalette");


var panneauMaisonRed;
var panneauMaisonBlue;
var panneauGaucheLabo;
var panneauChen;
var panneauTVRed;
var panneauNESRed;
var panneauBibliRedRDC;
var panneauBibliRedRDC2;
var panneauOrdiChambreRed;

function creerPanneaux(lieu) {


if(lieu == "bourgPalette")
{
panneauMaisonRed = new Panneau(3, 8, "Maison de RED");

panneauMaisonBlue = new Panneau(11, 8, "Maison de BLUE");

panneauGaucheLabo = new Panneau(7, 12, "Bienvenue à BOURG PALETTE !");

panneauChen = new Panneau(13, 16, "Labo du Prof. CHEN");

} // FIN DE BOURG PALETTE



if(lieu == "maisonRed")
{
panneauTVRed = new Panneau(4, 1, "PSG 3 - 0 OM.");

panneauBibliRedRDC = new Panneau(1, 1, "Pas un seul Dragon Ball.");

panneauBibliRedRDC2 = new Panneau(2, 1, "De vieux livres.");
} 



if(lieu == "chambreRed")
{
panneauNESRed = new Panneau(4, 5, "Smash Bros. sur NES ?!");
panneauOrdiChambreRed = new Panneau(1, 1, '"Connexion à The Silk Road en cours..."')
} 




} // FIN DE LA FONCTION