/**            BOUCLE
 *              FOR
 * Declarer une variable a qui est egale à un entier positif
 * 
 * Afficher "ca marche bien" autant de fois que le valeur de d
 * 
 * 
 */

let d=5;
for(let i=0;i<d;i++){
    console.log('ca marche bien');
}
//          WHILE
/**
 * Declarer une varaible a qui est egale a 4
 * tant que a est plus petit que 9 
 * incremente a de 1
 * si a est egal a 8 on arrete la boucle 
 * si a est egal a 7 on revient au debut de la boucle 
 * on console log(a)
 */
let oui=4;
while(a<9){
    oui++
    if(oui==7){
        continue
    }
    if(oui==8){
        break
    }
    console.log(oui);
}
console.log('Jai cassé la boucle au bout de '+oui+" tours");