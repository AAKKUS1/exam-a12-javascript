
function compterVoyelles(chaine) {
	
    let nbVoyelles = 0;
   let voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
   for (let lettre of chaine) {
       if (voyelles.includes(lettre.toLowerCase())) {
           nbVoyelles ++;
       }
   }
   return nbVoyelles;

 
}

console.log(compterVoyelles("bonjour")); 
    