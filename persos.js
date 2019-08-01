

class Personnage {
	constructor(x, y, marLeft, marTop, divPersonnage, nom) {
		this.x = x;
		this.y = y;
		this.marLeft = marLeft;
		this.marTop = marTop;
		this.mouvementX = 31.3;
		this.mouvementY = 31.5;
		this.entrainDeMarcher = false;
		this.pasActuelBas = 1;
		this.pasActuelHaut = 1;
		this.divPersonnage = divPersonnage;
		this.stopBouger = false;
		this.imagebas = "url(\"img/persos/"+nom+"/bas.png\")";
		this.imagebas1 = "url(\"img/persos/"+nom+"/bas1.png\")";
		this.imagebas2 = "url(\"img/persos/"+nom+"/bas2.png\")";
		this.imagehaut = "url(\"img/persos/"+nom+"/haut.png\")";
		this.imagehaut1 = "url(\"img/persos/"+nom+"/haut1.png\")";
		this.imagehaut2 = "url(\"img/persos/"+nom+"/haut2.png\")";
		this.imagedroite = "url(\"img/persos/"+nom+"/droite.png\")";
		this.imagedroite1 = "url(\"img/persos/"+nom+"/droite1.png\")";
		this.imagegauche = "url(\"img/persos/"+nom+"/gauche.png\")";
		this.imagegauche1 = "url(\"img/persos/"+nom+"/gauche1.png\")";
		$(this.divPersonnage).css("margin-left", this.marLeft);
		$(this.divPersonnage).css("margin-top", this.marTop);
		this.texteOuvert = false; // Sert dans boutonaction.js pour savoir si le txt est ouvert

		var self = this; // Sert pour le mouvement du perso dans le timer du AFKAleatoire()

	}

	marcher(direction) {

		// A FAIRE // FAIT ?
		if(this.entrainDeMarcher == false) {
			if(this.stopBouger == false)
			{	
				if(direction == 'gauche') { // GAUCHE
					$(this.divPersonnage).css("background-image", this.imagegauche1);
					this.entrainDeMarcher = true;
					var maNew = this.marLeft - this.mouvementX;

					$(this.divPersonnage).animate({
						marginLeft: maNew
					}, tempsDeplacement, function() {
						this.entrainDeMarcher = false;
						$(this.divPersonnage).css("background-image", this.imagegauche);
					});

					this.marLeft = maNew;
					this.x--;
					
					$(this.divPersonnage).css("margin-left", maNew);
				}

				else if(direction == 'haut') { // HAUT
					if(this.pasActuelHaut % 2 == 0) {
						$(this.divPersonnage).css("background-image", this.imagehaut1);
					}
					else {
						$(this.divPersonnage).css("background-image", this.imagehaut2);
					}
					this.entrainDeMarcher = true;
					var maNew = this.marTop - this.mouvementY;

					$(this.divPersonnage).animate({
						marginTop: maNew
					}, tempsDeplacement, function() {
						this.entrainDeMarcher = false;
						$(this.divPersonnage).css("background-image", this.imagehaut);
					});

					this.marTop = maNew;
					this.y--;
					
					$(this.divPersonnage).css("margin-top", maNew);
					this.pasActuelHaut++;
				}

				else if(direction == 'droite') { // DROITE
					$(this.divPersonnage).css("background-image", this.imagedroite1);
					this.entrainDeMarcher = true;
					var maNew = this.marLeft + this.mouvementX;

					$(this.divPersonnage).animate({
						marginLeft: maNew
					}, tempsDeplacement, function() {
						this.entrainDeMarcher = false;
						$(this.divPersonnage).css("background-image", this.imagedroite);		
					});

					this.marLeft = maNew;
					this.x++;
					
					$(this.divPersonnage).css("margin-left", maNew);

				}

				else if(direction == 'bas') { // BAS

					if(pasActuelBas % 2 == 0) {
						$(this.divPersonnage).css("background-image", this.imagebas1);
					}
					else {
						$(this.divPersonnage).css("background-image", this.imagebas2);
					}
					this.entrainDeMarcher = true;
					var maNew = this.marTop + mouvementY;

					$(this.divPersonnage).animate({
						marginTop: maNew
					}, tempsDeplacement, function() {
						this.entrainDeMarcher = false;
						$(this.divPersonnage).css("background-image", this.imagebas);
					});

					this.marTop = maNew;
					this.y++;

					$(this.divPersonnage).css("margin-top", maNew);
					this.pasActuelBas++;



				}

			} // test stopBouger
		} // test entrainDeMarcher







	} //  FIN DE THIS.MARCHER();





	bougerBas() {
		if(this.pasActuelBas % 2 == 0) {
			$(this.divPersonnage).css("background-image", this.imagebas1);
		}
		else {
			$(this.divPersonnage).css("background-image", this.imagebas2);
		}
		this.entrainDeMarcher = true;
		this.maNew = this.marTop + this.mouvementY;

		$(this.divPersonnage).animate({
			marginTop: this.maNew
		}, 280, function() {
			this.entrainDeMarcher = false;
			$(this.divPersonnage).css("background-image", this.imagebas);
		});

		this.marTop = this.maNew;
		this.y++;
		$(this.divPersonnage).css("margin-top", this.maNew);
		this.pasActuelBas++;
	}

	bougerHaut () {
		if(this.pasActuelHaut % 2 == 0) {
			$(this.divPersonnage).css("background-image", this.imagehaut1);
		}
		else {
			$(this.divPersonnage).css("background-image", this.imagehaut2);
		}
		this.entrainDeMarcher = true;
		this.maNew = this.marTop - this.mouvementY;

		$(this.divPersonnage).animate({
			marginTop: this.maNew
		}, 280, function() {
			this.entrainDeMarcher = false;
			$(this.divPersonnage).css("background-image", this.imagehaut);
		});

		this.marTop = this.maNew;
		this.y--;
		$(this.divPersonnage).css("margin-top", this.maNew);
		this.pasActuelHaut++;
	}

	bougerGauche() {
		$(this.divPersonnage).css("background-image", this.imagegauche1);

		this.entrainDeMarcher = true;
		this.maNew = this.marLeft - this.mouvementX;

		$(this.divPersonnage).animate({
			marginLeft: this.maNew
		}, 280, function() {
			this.entrainDeMarcher = false;
			$(this.divPersonnage).css("background-image", this.imagegauche);
		});

		this.marLeft = this.maNew;
		this.x--;
		$(this.divPersonnage).css("margin-left", this.maNew);
	}

	bougerDroite() {
		$(this.divPersonnage).css("background-image", this.imagedroite1);

		this.entrainDeMarcher = true;
		this.maNew = this.marLeft + this.mouvementX;

		$(this.divPersonnage).animate({
			marginLeft: this.maNew
		}, 280, function() {
			this.entrainDeMarcher = false;
			$(this.divPersonnage).css("background-image", this.imagedroite);
		});

		this.marLeft = this.maNew;
		this.x++;
		$(this.divPersonnage).css("margin-left", this.maNew);
	}


	switchToHero() {
		if(this.x == x && this.y == y+1) // ON EST AU DESSUS
		{
			$(this.divPersonnage).css("background-image", this.imagehaut);
		}
		else if(this.x == x-1 && this.y == y) // ON EST A DROITE
		{
			$(this.divPersonnage).css("background-image", this.imagedroite);
		}
		else if(this.x == x && this.y == y-1) // ON EST EN DESSOUS
		{
			$(this.divPersonnage).css("background-image", this.imagebas);
		}
		else if(this.x == x+1 && this.y == y) // ON EST A GAUCHE
		{
			$(this.divPersonnage).css("background-image", this.imagegauche);
		}
		else {
			alert('Erreur de switchToHero');
		}
	}


	changeImgRandom(div, haut, bas, droite, gauche) {
		
		if(nbrRandom(1, 2) == 1){ // Une chance sur 2 de bouger

				var testRandom = nbrRandom(1,4);
				switch (testRandom) {
				case 1: 
					$(div).css("background-image", haut);
					break;
				case 2:
					$(div).css("background-image", bas);
					break;
				case 3:
					$(div).css("background-image", droite);
					break;
				case 4:
					$(div).css("background-image", gauche);
					break;
				default: 
					alert('Erreur d\'AFKAleatoire');
				}


			}

	}

	AFKAleatoire()  {
		var leDiv = this.divPersonnage;
		var leHaut = this.imagehaut;
		var leBas = this.imagebas;
		var laGauche = this.imagegauche;
		var laDroite = this.imagedroite;
		self = this;
		this.timerAFK = setInterval(function() {
				self.changeImgRandom(leDiv, leHaut, leBas, laDroite, laGauche);
			}, 1000); // On tente un changement de direction toutes les 1 secondes
	}



	parler(dialogue) {


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////   BOURG PALETTE   /////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		


//////////////////////////////////////////////////   EXTERIEUR ///////////////////////////////////////////////////////


		// MEUF BASE PALETTE
		// Test : si parler à MEC GROS PALETTE 
		if(dialogue == 'meufbasePalette') {
			if(missions[0] == 'jamais') {
				this.switchToHero();
				$("#divTexte").css("display", "block");
				$("#divTexte").html('Y\'a un gros vers chez CHEN...');
			}
			else if(missions[0] == 'une') 
			{
				this.switchToHero();
				$("#divTexte").css("display", "block");
				$("#divTexte").html('Il est chelou, hein ?');
			}
			else if(missions[0] == 'deux') 
			{
				this.switchToHero();
				$("#divTexte").css("display", "block");
				$("#divTexte").html('Il veut me faire jouer à sa console ...');
			}
		}

		// GROS BASE PALETTE
		else if(dialogue == "mecGrosPalette1") {
			if(missions[0] == 'jamais') 
			{
				this.switchToHero();
				$("#divTexte").css("display", "block");
				$("#divTexte").html('La folie ce jeu sous CHROME !');
				missions[0] = 'une';
			}
			else if(missions[0] == 'une') 
			{
				this.switchToHero();
				$("#divTexte").css("display", "block");
				$("#divTexte").html('Tu veux essayer depuis ma SWITCH ?');
				missions[0] = 'deux';
			}
			else if(missions[0] == 'deux') {
				this.switchToHero();
				$("#divTexte").css("display", "block");
				$("#divTexte").html('Sinon j\'ai une GBA !');
			}
		}




//////////////////////////////////////////////////  MAISON RED ///////////////////////////////////////////////////////

		// GP MAISON RED	
		// PAS DE BIERE
		else if(dialogue == "gpPalette1" && inventaire[0] == 0) {
			this.switchToHero();
			$("#divTexte").css("display", "block");
			$("#divTexte").html('Ne me dis pas que tu recherches un emploi ?');
		}
		else if(dialogue == "gpPalette2" && inventaire[0] == 0) {
			this.switchToHero();
			$("#divTexte").css("display", "block");
			$("#divTexte").html('Écoute, j\'ai un CDI dans la chambre en haut...');
		}
		else if(dialogue == "gpPalette3" && inventaire[0] == 0) {
			this.switchToHero();
			$("#divTexte").css("display", "block");
			$("#divTexte").html('Il faut absolument que je te signe, va le chercher !');
		}

		// ON A UNE BIERE
		else if(dialogue == "gpPalette1" && inventaire[0] > 0) {
			this.switchToHero();
			$("#divTexte").css("display", "block");
			$("#divTexte").html('Marché conclu !');
		}

		else if(dialogue == "gpPalette2" && inventaire[0] == 1) {
			this.switchToHero();
			$("#divTexte").css("display", "block");
			$("#divTexte").html('Tu vas donc rencontrer le Professeur.');
		}

		else if(dialogue == "gpPalette3" && inventaire[0] == 1) {
			this.switchToHero();
			$("#divTexte").css("display", "block");
			$("#divTexte").html('Une petite intro pour la nostalgie...');
		}



////////////////////////////////////////////////// LABO CHEN ///////////////////////////////////////////////////////

		// PIKACHU	
		else if(dialogue == "pikachu1") {
			this.switchToHero();
			$("#divTexte").css("display", "block");
			$("#divTexte").html('Pika ?');
		}

		// CHEN
		else if(dialogue == "profChen1") {
			
		
				this.switchToHero();
				$("#divTexte").css("display", "block");
				$("#divTexte").html('J\'ai un PIKACHU qui fait n\'importe quoi ...');
			
		}
		else if(dialogue == "profChen2") {
			
				this.switchToHero();
				$("#divTexte").css("display", "block");
				$("#divTexte").html('Tu crois quand même pas que je vais le donner ?');
			
		}


	}


}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////   DECLARATION DES PERSOS   ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// A CHAQUE NV PERSO : 
// 1 - METTRE SPRITE DANS DOSSIER A SON NOM, INDIQUE EN DERNIER PARAMETRE
// 2 - CREER DIV DANS INDEX.HTML OU PAGE AUTRE + CSS
// 3 - METTRES COORDONNEES DANS coordonneesMurs.JS
// 4 - AJOUTER ACTION DIALOGUE DANS boutonaction.js
// 5 - AJOUTER LE DIALOGUE ICI DANS Personnage.parler()
// 6 - LE FAIRE APPARAITRE/DISPARAITRE DANS changemap.js SELON LA MAP


var meufBasePalette = new Personnage(4, 11, 433.9, -377.4, "#divMeufBase", "meufbase");
meufBasePalette.AFKAleatoire();

var mecGrosPalette = new Personnage(12, 18, 647.5, -189.8, "#divMecGros", "mecgros");
mecGrosPalette.AFKAleatoire();

var gpPalette = new Personnage(6, 4, 620.7, -107.2, "#gpPalette", "vieux");
gpPalette.AFKAleatoire();

var profChen = new Personnage(6, 1, 593, -298, "#profChen", "chen");

var monPikachu = new Personnage(8, 3, 646.4, -245.4, "#divPikachu", "pikachu");
monPikachu.AFKAleatoire();

