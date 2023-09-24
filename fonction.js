/**         Fonction
 * 
 * 
 * Declarer trois variables prenom1="Gariel" et prenom2="Lucas" et result
 * 
 * Declarer une fonction checkName(qui possede 2 parametres) qui verifie si les deux noms sont identique 
 * 
 * console log le result
 * 
 */

let prenom1="Gabriel";
let prenom2="Lucas";
let result=checkName(a,b)

function checkName(name1, name2){
    if(name1===name2){
        return true
    }else{
        return false
    }
}
console.log(result);