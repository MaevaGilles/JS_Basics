alert('Voici lexo pour calculer des factoriels');

  function facto(num)
  {
      var f = 1;
      for(var i = 1; i <= num; i++)
      {
          f = f* i;
      }
      return(f);
  }

  console.log("FACTORIELLE CALCUL");
  let n = prompt("De quel nombre entier supérieur à zéro veux-tu calculer la factorielle ?");
  if (n <= 0) {alert("Impossible, merci de relire la consigne");}
  else        {alert("La Factorielle de "+n+" est : " + facto(n));}


  




 