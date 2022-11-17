  const books = [
    { title: 'Gatsby le magnifique',          id: 133712,  rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634,  rented: 28 },
    { title: 'Orgueil & Préjugés',            id: 873495,  rented: 67 },
    { title: 'Les frères Karamazov',          id: 450911,  rented: 55 },
    { title: 'Dans les forêts de Sibérie',    id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911,  rented: 45 },
    { title: 'Et on tuera tous les affreux',  id: 67565,   rented: 36 },
    { title: 'Le meilleur des mondes',        id: 88847,   rented: 58 },
    { title: 'La disparition',                id: 364445,  rented: 33 },
    { title: 'La lune seule le sait',         id: 63541,   rented: 43 },
    { title: 'Voyage au centre de la Terre',  id: 4656388, rented: 38 },
    { title: 'Guerre et Paix',                id: 748147,  rented: 19 }
    ];

  function display(array){ for(let i = 0; i < array.length; i++) { console.log(array[i]); }}
  
  console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
  let flag = 0;
  books.forEach(book => book.rented === 0 && flag++);
  if (flag > 0) {console.log("=> NON");}
  else {console.log("=> OUI");}

  let mostBorrowedBook =  books.find(book => book.rented === Math.max.apply(Math, books.map(b => b.rented)));
  console.log("\n\nLe livre le plus emprunté est : " + mostBorrowedBook.title + "\n => emprunté " + mostBorrowedBook.rented + " fois");

  let lessBorrowedBook =  books.find(book => book.rented === Math.min.apply(Math, books.map(b => b.rented)));
  console.log('\n\nLe livre le moins emprunté est ' + lessBorrowedBook.title + "\n => emprunté " + lessBorrowedBook.rented + " fois");

  console.log("\n\nLe livre avec l'ID: 873495 est :\n");
  console.log(books.find(book => book.id === 873495))

  console.log("\n\nSuppression du livre avec l'ID: 133712\n");
  console.log(books.find(book => book.id == 133712));
  console.log("=> Supprimé");
  for (let i in books) { if(books[i].id === 133712) {books.splice(i, 1);}}
  
  console.log("\n\nLivres triés par ordre alphabétique (sans l'ID 133712 supprimé)\n");
  books.sort(function (a,b) {return a.title.localeCompare(b.title);})
  display(books);
