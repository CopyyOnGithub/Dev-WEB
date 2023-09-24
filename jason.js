"use strict";

/*
* 1 tueur "Jason" avec 70pv. Quand il attaque :
    - soit le survivant meurt                     
    - soit le survivant esquive et inflige 10dgt  
    - soit le survivant inflige 15dgt mais meurt  
|    
* Les morts sont affichées à la fin. 
|
* Caractéristiques des personnages et noms, probabilité de mourir, probabilité de dgt 
et de mourir en mettant des dgts
|
* 5 survivants avec nom généré aléatoirement d'un tableau de prénoms 
|
* Il faut un message pour chaque action de Jason
|
*/

// Initialisation des variables caractéristiques, prénoms, stats.
let caractéristiques = ["sportif", "nerd", "blonde", "geek", "Surdoué"];                              // Tableau des caractéristiques
let prenoms = ["Gabriel", "Maxime", "Lucas", "Hugo", "Kader"];                                       // Tableau des prénoms
let stats = [[0.1, 0.7, 0.2], [0.5, 0.3, 0.2], [0.1, 0.6, 0.3], [0.4, 0.2, 0.4], [0.3, 0.5, 0.1]];  // Tableau de tableau des stats de probabilité.
let joueurs = [];                                                                                   // Tableau où sera ajouté les objets Personnage.
let survivantsMorts = [];                                                                           // Tableau des personnes mortes.
let tueur = ["Jason", 70];                                                                          // Variable pour jason


class Personnage {

    constructor(nom, caractéristique, probaMort, probaDgt, probasacrifice) {
        this.nom = nom;
        this.caractéristique = caractéristique;
        this.probaMort = probaMort;
        this.probaDgt = probaDgt;
        this.probasacrifice = probasacrifice;

    }
}

prenoms.forEach(nom => { 
    let i = Math.floor(Math.random() * caractéristiques.length); 
    let caractéristique = caractéristiques.splice(i, 1);                        //choisir une caractéristique aléatoire et la retirer du tableau

    let j = Math.floor(Math.random() * stats.length);            
    let statPerso = stats.splice(j, 1);                                         //choisir un tableau stat aléatoire et la retirer du tableau

    let joueur = new Personnage(nom, caractéristique, statPerso[0][0], statPerso[0][1], statPerso[0][2]);
    joueurs.push(joueur)
});

function combat() { 
    let mort = "";                      // chaine de caractère vide, qui va etre remplie par le nom des survivants morts

    if (joueurs.length >= 1 && tueur[1] > 0) {
        let chiffreSurvivantAleatoire = Math.floor(Math.random() * joueurs.length);
        // console.log(chiffreSurvivantAleatoire);
        let survivantCible = joueurs[chiffreSurvivantAleatoire]
        attaqueJason(survivantCible, chiffreSurvivantAleatoire)
        

    } else if (joueurs.length >= 1 && tueur[1] <= 0) {

        for (let i = 0; i < survivantsMorts.length; i++) {
            let test = survivantsMorts[i]; 

            if (survivantsMorts.length > 1) {
                if (test == survivantsMorts[survivantsMorts.length - 1]) {
                    mort += `et ${test}`;                                                  // ${test} est une contraction syntaxique permettant de concatener une variable a l'interieur d'une chaine de caractère.

                } else if (test == survivantsMorts[survivantsMorts.length - 2]) {
                    mort += `${test} `                                                     
                } else {
                    mort += `${test}, `;
                }
            } 
            else {
                mort += `${test}`
            }
        }

        if (!mort) {                                                                        //toutes les différentes conditions de victoire et de défaite possible.
        console.log("Jason a été tué, il n'y a aucune victime")                             
        } else {
            console.log("Jason a été tué mais ", mort + " sont morts")
        }

    } else if (joueurs.length == 0 && tueur[1] > 0) {
        console.log("Jason a gagné, tous le monde est mort");

    } else if (joueurs.length == 0 && tueur[1] <= 0) {
        console.log("Egalité, tout le monde est mort...", mort);
    }

}

function attaqueJason(survivantCible, chiffreSurvivantAleatoire) {                              // fonction permettant de mettre en place les differentes proba definies au préalable.
    let valeurAleatoire = Math.random();

    if (valeurAleatoire < survivantCible["probaMort"]) {
        console.log("Jason a tué", survivantCible["nom"]);
        survivantsMorts.push(survivantCible["nom"]);
        joueurs.splice(chiffreSurvivantAleatoire, 1);

      } else if (valeurAleatoire < survivantCible["probaMort"] + survivantCible["probaDgt"]) {
        console.log(survivantCible["nom"],"esquive et met 10 dégâts à Jason !");
        tueur[1] -= 10;

      } else  { 
        console.log(survivantCible["nom"] ,"se sacrifie et met 15 dégâts à Jason !");
        tueur[1] -= 15;
        survivantsMorts.push(survivantCible["nom"]);
        joueurs.splice(chiffreSurvivantAleatoire, 1);
      }


    console.log("Survivants morts :", survivantsMorts);
    combat()
    };


combat()
