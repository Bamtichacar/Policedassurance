

//EXERCICE POLICE D'ASSURANCE
/* Police d’assurance.
 Une compagnie d’assurance automobile propose 4 familles de tarifs du moins cher au plus
 onéreux : A, B, C et D.
 Le tarif dépend de la situation du conducteur:-Un conducteur de moins de 25 ans et titulaire du permis depuis moins de deux ans, se voit
 attribuer le tarif D s’il n’a jamais été responsable d’accident. Sinon, la compagnie refuse de
 l’assurer.- Un conducteur de moins de 25 ans et titulaire du permis depuis plus de deux ans, ou de
 plus de 25 ans mais titulaire du permis depuis moins de deux ans a le droit au tarif C s’il n’a
 jamais provoqué d’accident, au tarif D pour un accident, sinon il est refusé.-Un conducteur de plus de 25 ans titulaire du permis depuis plus de deux ans bénéficie du
 tarif B s’il n’est à l’origine d’aucun accident et du tarif C pour un accident, du tarif D pour
 deux accidents, et refusé sinon.
 Par ailleurs, pour encourager la fidélité de ses clients, la compagnie propose un contrat au
 tarif immédiatement inférieur s’il est assuré depuis plus d’un an.
 Écrire un algorithme qui propose un tarif d’assurance selon les caractéristiques d’un client
 potentiel */


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
/* Prix d’une photocopie
Écrire un algorithme qui affiche le prix de n photocopies sachant que le reprographe facture
0,10 € les dix premières photocopies, 0,09 € les vingt suivantes et 0,08 € au-dela */


/* function prixDesPhotocopies(n) {
    let prix = 0;  
    if(n <= 10) {
        prix = n * 0.10;
    } else if(n > 10 && n <= 30) {
        prix = 10*0.10 + (n-10)*0.09;
    } else if(n>30) {
        prix = 10*0.10 + 20*0.09 + (n-30)*0.08;
    }
    return prix.toFixed(2);   // tiFixed(2) Pour arrondir à 2ch après la virgule
}

console.log(`${prixDesPhotocopies(25)} €`);
 */



// EXERCICE CALCUL DES IMPOTS
/* Calcul des impôts ˆ Ecrire un algorithme qui affiche si un contribuable d’un pays imaginaire
est imposable ou non sachant que :– les hommes de plus de 18 ans paient l’impôt,– les
femmes paient l’impôt si elles ont entre 18 et 35 ans,– les autres ne paient pas d’impôt. */


/* let sexe = "";
let age = "";

function estImposable(sexe,age) {
    if ((sexe==="homme" && age>=18) || (sexe==="femme" && age>=18 && age<=35)) {
        return "Le contrubuable est imposable";
    } else
        return "Le contrubuable n'est pas imposable";
    }


    console.log(estImposable("femme",40));
 */


// EXERCICE ECRIRE UN ALGO EN ETOILE PARTIE 1
/* Ecrire un algorithme qui affiche des étoiles (*) selon la disposition suivante :
 * * * * * * * * *
 * * * * * * * *
 * * * * * * *
 * * * * * *
 * * * * *
 * * * *
 * * *
 * *
 * 
*/


/* function etoilePointeEnBas(n) {   // n corrspond au Nombre de lignes à créer qui correspondront ici au nb d'étoiles
    for (let i = 0; i < n; i++) {
      let etoile = '';
      for (let j = 0; j < (n - i); j++) {  // Nombre d'étoiles à afficher dans chaque ligne, n-i reduira l'affichage de 1 (i augmente au for précédent donc parallelement reduiera j ici avec n-i)
        etoile += '*';
      }
      console.log(etoile);
    }
  }
  
  etoilePointeEnBas(9);



// AUTRE SOLUTION EN DECREMENTANT :

  function etoilePointeEnBas(n) {   // n corrspond au Nombre de lignes à créer qui correspondront ici au nb d'étoiles
    for (let i = n; i > 0; i--) {
      let etoile = '';
      for (let j = i; j > 0; j--) {  // Nombre d'étoiles à afficher dans chaque ligne, j prendra la valeur du i de la 1ere boucle for 
        etoile += '*';
      }
      console.log(etoile);
    }
  }
  
  etoilePointeEnBas(9);
 */



  // EXERCICE ECRIRE UN ALGO EN ETOILE PARTIE 2
  /* Ecrire un algorithme qui affiche des étoiles (*) selon la disposition suivante :
 *
 * *
 * * *
 * * * *
 * * * * *
 * * * * * *
 * * * * * * *
 * * * * * * * *
 * * * * * * * * *
 * * * * * * * * * *   
 */
 

/* function etoilePointeEnHaut(n) {   // n corrspond au Nombre de lignes à créer qui correspondront ici au nb d'étoiles
    for (let i = 0; i < n; i++) {
      let etoile = '';
      for (let j = 0; j <= i; j++) {  // Nombre d'étoiles à afficher dans chaque ligne, on commence à zero
        etoile += '*';
      }
      console.log(etoile);
    }
}
  
etoilePointeEnHaut(10);
 */


// AUTRE SOLUTION EN DECREMENTANT :

/* function etoilePointeEnHaut(n) {   // n correspond au Nombre de lignes à créer qui correspondront ici au nb d'étoiles
    for (let i = n; i > 0; i--) {
      let etoile = '';
      for (let j = n; j >=i; j--) {  // Nombre d'étoiles à afficher dans chaque ligne, c'est l'écart entre j et i 
        etoile += '*';
      }
      console.log(etoile);
    }
}
  
etoilePointeEnHaut(10);
 */
  





/* EXERCICE RECHERCHE DES OCCURENCES
Recherche de toutes les occurrences.
Définir une fonction qui retourne la liste des rangs de toutes les occurrences d’un élément x
dans une liste t. */

// formules de base :
/* function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
  }
  [2, 5, , 9].forEach(logArrayElements);
  // logs:
  // a[0] = 2
  // a[1] = 5
  // a[3] = 9
 */  


  /* Trouver toutes les occurences d'un élément
  Dans l'exemple qui suit, on utilise indexOf() afin de trouver tous les indices d'un élément 
  dans un tableau. On peut utiliser la méthode push afin d'ajouter ces indices dans un autre tableau.
  
  js
  Copy to Clipboard */
/*   var indices = [];
  var tableau = ["a", "b", "a", "c", "a", "d"];
  var élément = "a";
  var idx = tableau.indexOf(élément);
  while (idx != -1) {
    indices.push(idx);
    idx = tableau.indexOf(élément, idx + 1);
  }
  console.log(indices);
 */  // [0, 2, 4]




// Réponse exercice :


//NON PAS BON
/* let liste_t =["tati","tata","toto",32,true,"tatie","tatie"];


function logArrayElements(element, index, liste_t) {
    console.log("liste_t[" + index + "] = " + element);
}

//liste_t.forEach(logArrayElements);
  

["tatie"].forEach(logArrayElements);



const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "b"
 */




// REPONSE OK

/* let t = ["a", "b", "a", "c", "a", "d", "x", 45, "x"];

function listeDesRangsDeToutesLesOccurences(x) {
    let indices = [];
    let index = t.indexOf(x);
    while (index != -1) {
      indices.push(index);
      index = t.indexOf(x, index + 1);
    }
    console.log(indices);
}
listeDesRangsDeToutesLesOccurences("a");



//OU 

let tBis = ["a", "b", "a", "c", "a", "d", "x", 45, "x"];

let elementRecherche = "a";


function listeDesRangsDeToutesLesOccurencesBis(x) {
    let indices = [];
    let index = tBis.indexOf(x);
    while (index != -1) {
      indices.push(index);
      index = tBis.indexOf(x, index + 1);
    }
    console.log(indices);
}
listeDesRangsDeToutesLesOccurencesBis(elementRecherche);
 */




//EXERCICE TRI A BULLES

/* 
Tri à bulles.
Dans le tri à bulles, on parcourt la liste en commençant par la fin, en effectuant un échange
à chaque fois que l’on trouve deux éléments successifs qui ne sont pas dans le bon ordre.
Définir une fonction qui trie une liste selon la méthode du tri à bulles
*/


// Pour parcourir la liste en commençant par le début :


/* let tableau = [1,2,7,6,5,4];

console.log(tableau);

function triABulles() {
    for (let i = 0; i < tableau.length - 1; i++) {
        for (let j = 0; j < tableau.length - 1 - i; j++) {
            if (tableau[j] > tableau[j + 1]) {
                // Échange des éléments
                let temp = tableau[j];
                tableau[j] = tableau[j + 1];
                tableau[j + 1] = temp;
            }
        }
    }
    console.log(tableau);
}
    
triABulles();



// Pour parcourir la liste en commençant par la fin :

let tableauBis = [1,2,7,6,5,4];

console.log(tableauBis);

function triABullesBis() {
    for (let i= tableauBis.length -1; i>= 0; i--) {
        for (let j = tableauBis.length -1; i>0;i--) {
            if (tableauBis[j] < tableauBis[j-1]) {
                // Échange des éléments
                let temp = tableauBis[j-1];
                tableauBis[j-1] = tableauBis[j];
                tableauBis[j] = temp;
            }
        }
    }
    console.log(tableauBis);
}
    
triABullesBis();

 */




//EXERCICE PALINDROME

/* Palindrome.
Écrire un algorithme qui vérifie si le mot entré par l’utilisateur est un palindrome. Afficher
“true” si c’est le cas, “false” dans le cas contraire */


/* PAS BON return true n'est pas bien placé car à la 1ere valeur ok trouvée 
il retournera true car il est dans la boucle for
Le code retourne true dès qu’il trouve une correspondance, ce qui n’est pas correct. 
Il devrait continuer à vérifier tous les caractères. Le retour true devrait se faire après la boucle, 
seulement si aucune différence n’a été trouvée.
Dans cet algorithme, on veut vérifier chaque paire de caractères (du début et de la fin) pour voir 
s’ils sont identiques. Si on trouve une paire qui ne correspond pas, on retournes false immédiatement. 
Si toutes les paires correspondent, alors on retourne true après avoir vérifié toutes les paires.
 */
/* let mot = "abcdcba";

function estUnPalindrome(mot) {
    for (let i = 0; i < mot.length/2; i++) {
        if(mot.charAt(i) === mot.charAt(mot.length-1 -i)) {
            return true;
        } else
            return false
    }
    
}

console.log(estUnPalindrome(mot));
 */

// Code Ok, pour pouvoir sortir return true de la boucle mais laisser return false à la 1ere iteration fausse,
// il faut passse par !== au lieu de ===


let mot = "abcdcba";

function estUnPalindrome(mot) {
    for (let i = 0; i < mot.length/2; i++) {
        if(mot.charAt(i)!== mot.charAt(mot.length-1 -i)) {
            return false;    // Si une paire ne correspond pas, retourne false
        } 
    }
    return true;      // Si toutes les paires correspondent, retourne true
    
}

console.log(estUnPalindrome(mot));



/* NE PAS S EN SERVIR
function reverseString(str) {
    return str.split("").reverse().join("");
}

pui si mot 1=mot2 alors true etc
 */








