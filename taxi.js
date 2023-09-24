"use strict"

let personnage="Jean-baptiste";
let sante=10;
let musiques=["Anissa - Wejdene","Onizuka - PNL", "Tourner dans le vide - Indila", "Gasolina - Tiakola", "Jocelyn Flores - XXXTentacion"];
let feux=30
let changements=0


for (let i=0;i<30;i++){
    let musiqueTaxi=musiques[Math.floor(Math.random()*5)]
    if (musiqueTaxi=="Anissa - Wejdene"){
        sante-=1
        console.log("il reste a Jean-Baptiste "+sante+ " de santé mantale")
        if (sante==0){
            console.log("Explosion")
            break
        }else{
            changements+=1
            
        }
    }
    feux-=1
    if (feux==0){
        console.log("arrivé a dsetination en "+changements+" étapes")
    }else{
        console.log("il reste "+feux+" feux, et la musique jouée a été "+ musiqueTaxi)
    }
}
