

//EXERCICE POLICE D'ASSURANCE


// Familles des tarifs, le A est le - cher
/* const tarifA = "A";
const tarifB = "B";
const tarifC = "C";
const tarifD = "D";
const refusDAssurer = "refus d'assurer";

let ageConducteur = document.getElementById("age");
let nbAnneesAnciennetePermis = 5;
let accidentResponsable = 0;
let ancienneteAssurance = 1;
 */
/* à voir si rajout en l'écrivant comme il faut
let clientassurance = "oui"
if(clientassurance===oui) {
    ancienneteAssurance=input
} else
ancienneteAssurance=0
 */

/* function determinationdutarifinitial() {
    if((ageConducteur<25 && nbAnneesAnciennetePermis<2 && accidentResponsable===0)) {
        if(ancienneteAssurance>=1) {
            return tarifC;
        }else {
        return tarifD;
        }
    } else if((ageConducteur<25 && nbAnneesAnciennetePermis>=2) || (ageConducteur>=25 && nbAnneesAnciennetePermis<2) && accidentResponsable===0) {
        if(ancienneteAssurance>=1) {
            return tarifB;
        }else {
        return tarifC;
        }
    } else if((ageConducteur<25 && nbAnneesAnciennetePermis>=2) || (ageConducteur>=25 && nbAnneesAnciennetePermis<2) && accidentResponsable===1) {
            if(ancienneteAssurance>=1) {
                return tarifC;
            }else {
            return tarifD;
            }
    } else if(ageConducteur>=25 && nbAnneesAnciennetePermis>=2 && accidentResponsable===0) {
        if(ancienneteAssurance>1) {
                return tarifA;
            }else {
            return tarifB;
            }
    } else if(ageConducteur>=25 && nbAnneesAnciennetePermis>=2 && accidentResponsable===1) {
        if(ancienneteAssurance>1) {
                return tarifB;
            }else {
            return tarifC;
            }
    } else if(ageConducteur>=25 && nbAnneesAnciennetePermis>=2 && accidentResponsable===2) {
        if(ancienneteAssurance>1) {
            return tarifA;
        }else {
        return tarifB;
        }
    }
    else {
    return refusDAssurer;
    }
}

console.log(determinationdutarifinitial());

 */
/* A VOIR
const input = prompt('What\'s your name?');
alert(`Your name is ${input}`);
console.log(input);


const input2 = prompt('What\'s your name?');
alert(`Your name is ${input2}`);

console.log(input2);

let ageConducteur = Window.prompt('Quel est votre âge');

 */



// EXERCICE PRIX D'UNE PHOTOCOPIE


function prixDesPhotocopies(n) {
    let prix = 0;  
    if(n <= 10) {
        prix = n * 0.10;
    } else if(n > 10 && n <= 30) {
        prix = 10*0.10 + (n-10)*0.09;
    } else if(n>30) {
        prix = 10*0.10 + 20*0.09 + (n-30)*0.08;
    }
    return prix;
}

console.log(`${prixDesPhotocopies(30)} €`);

