    
function moyenne(tab) {
  
    var n = tab.length;
    var somme=0;
    for(i=0; i<n; i++)
    {
        somme += tab[i];
    }
    var resultat = somme / n;
    return resultat;
 
}
  
console.log(moyenne([4, 6, 8]));