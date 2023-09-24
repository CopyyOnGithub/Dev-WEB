/**           CONDITION
 * declarer trois variable a=4,b=4,c=3
 * 
 * a sera l expression de reference 
 * si a est egal a b alor faire un console log('egal à b')
 * 
 * si a est egal a c alors faire un console log('egal à b')
 * 
 * par defaut il y a un console log("egal a rien")
 */
let a =12;
let b=6;
let c=3;
switch(a){
    case b:
        console.log("égal à b");
        break;
    case c:
        console.log("égal à c");
        break;
    default:
        console.log("égal à rien");
}
