/**                 Tableau
 * 
 * Declare un tableau vide names 
 * Ajouter "Kader", "Lucas", et "Maxime" dans le tableau via la methode push
 * 
 * Pour chaque element du tableau
 * 
 * Ajouter a la fin "est trop beau"
 * Afficher chaque element 
 * 
 */

let names=[];
names.push('Kader',"Lucas",'Maxime');

names.forEach(name =>{
    name += 'est trop beau ';
    console.log(name)
})