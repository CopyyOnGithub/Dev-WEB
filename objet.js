/**             OBJECT
 * 
 * Declarer un Objet student avec name , favoriteFood et city 
 * 
 * Recuperer le nombre de caracteres dans chaque proprieté puis les additionner pour obtenir un nombre 
 * 
 * Si le nombre pair afficher dans la console "pair"
 * Si le nombre est impair afficher dans la console "impaire"
 * 
 * Plusieurs solutions possibles 
 * Object.keys()=> recuperer les proprietés
 * Object.values() => recuperer les valeurs
 * 
 */
//Premiere exemple 
// let student={
//     name:'Nicolas',
//     favoriteFood:"Salad",
//     city:"Paris",
// }
// let values=Object.values(student);
// console.log(values);
// let resultBis=0;
// values.forEach((values)=> {
//     resultBis+=values.length
// })
// console.log(resultBis);
//exemple 2
let personne={
    prenom:'Gabriel',
    Plat:"Mcdonald",
    Pays:"France",
}
let values=Object.values(presonne);
let count=values.reduce((acc,value)=>acc+value.length,0)
console.log(count);