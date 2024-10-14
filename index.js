// Familles des tarifs, le A est le - cher
const tarifA = "A";
const tarifB = "B";
const tarifC = "C";
const tarifD = "D";
const refusDAssurer = "refus d'assurer";

let ageConducteur = 83;
let nbAnneesAnciennetePermis = 1;
let accidentResponsable = 0;
let ancienneteAssurance = 1;


function determinationdutarifinitial() {
    if((ageConducteur<25 && nbAnneesAnciennetePermis<2 && accidentResponsable===0)) {
        if(ancienneteAssurance>1) {
            return tarifC;
        }else {
        return tarifD;
        }
    } else if((ageConducteur<25 && nbAnneesAnciennetePermis>2) || (ageConducteur>25 && nbAnneesAnciennetePermis<2) && accidentResponsable===0) {
        if(ancienneteAssurance>1) {
            return tarifB;
        }else {
        return tarifC;
        }
    } else if((ageConducteur<25 && nbAnneesAnciennetePermis>2) || (ageConducteur>25 && nbAnneesAnciennetePermis<2) && accidentResponsable===1) {
            if(ancienneteAssurance>1) {
                return tarifC;
            }else {
            return tarifD;
            }
    } else if(ageConducteur>25 && nbAnneesAnciennetePermis>2 && accidentResponsable===0) {
        if(ancienneteAssurance>1) {
                return tarifA;
            }else {
            return tarifB;
            }
    } else if(ageConducteur>25 && nbAnneesAnciennetePermis>2 && accidentResponsable===1) {
        if(ancienneteAssurance>1) {
                return tarifB;
            }else {
            return tarifC;
            }
    } else if(ageConducteur>25 && nbAnneesAnciennetePermis>2 && accidentResponsable===2) {
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









