
function sommePairs(tab) {
  
    var n = tab.length;
      var somme=0;
      for(i=0; i<n; i++)
      {
        if (tab[i] % 2 === 0) {
          somme += tab[i];
      }
  }
      return somme;
  }
  
  console.log(sommePairs([1, 2, 3, 4]));
 