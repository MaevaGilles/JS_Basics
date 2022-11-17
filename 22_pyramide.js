
  console.log("Salut, bienvenue dans ma super pyramide !");
  let floor = prompt("Combien d'étages veux-tu ?");
  for ( let i = 1 ; i <= floor ; i++ )
  {
    if (i == 1) { console.log(" ".repeat(floor-i)+"#".repeat(i));}
    else        { console.log(" ".repeat(floor-i)+"#".repeat(i)+"#".repeat(i-1))}
  }
