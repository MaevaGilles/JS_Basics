   const entrepreneurs = [
        { first: 'Steve', last: 'Jobs', year: 1955 },
        { first: 'Oprah', last: 'Winfrey', year: 1954 },
        { first: 'Bill', last: 'Gates', year: 1955 },
        { first: 'Sheryl', last: 'Sandberg', year: 1969 },
        { first: 'Mark', last: 'Zuckerberg', year: 1984 },
        { first: 'Beyonce', last: 'Knowles', year: 1981 },
        { first: 'Jeff', last: 'Bezos', year: 1964 },
        { first: 'Diane', last: 'Hendricks', year: 1947 },
        { first: 'Elon', last: 'Musk', year: 1971 },
        { first: 'Marissa', last: 'Mayer', year: 1975 },
        { first: 'Walt', last: 'Disney', year: 1901 },
        { first: 'Larry', last: 'Page', year: 1973 },
        { first: 'Jack', last: 'Dorsey', year: 1976 },
        { first: 'Evan', last: 'Spiegel', year: 1990 },
        { first: 'Brian', last: 'Chesky', year: 1981 },
        { first: 'Travis', last: 'Kalanick', year: 1976 },
        { first: 'Marc', last: 'Andreessen', year: 1971 },
        { first: 'Peter', last: 'Thiel', year: 1967 }
        ];

    function display(array) { 
        for(let i = 0; i < array.length; i++) 
        {console.log(array[i]);}
    }

    console.log("Liste des entrepreneurs qui sont nés dans les années 70");
    let resultat = (entrepreneurs.filter(entrepreneurs => entrepreneurs.year >= 1970 && entrepreneurs.year < 1980));
    display(resultat);

    console.log("Array contenant le prénom et le nom des entrepreneurs");
    let names = (entrepreneurs.map(entrepreneurs => `${entrepreneurs.first} ${entrepreneurs.last}`));
    display(names);

    console.log("Quel âge devrait avoir chaque inventeur aujourd'hui ?");
    actual_year = 2022
    birth_year = (entrepreneurs.map(entrepreneurs => entrepreneurs.year))
    for (i = 0; i < birth_year.length; i++)
    {
        console.log((names[i] + " devrait avoir ") + (actual_year - birth_year[i]) + " ans.");
    }

    console.log("\nEntrepreneurs par ordre alphabétique du Nom de famille.\n\n");
    entrepreneurs.sort(function (a,b) {return a.last.localeCompare(b.last);})
    display(entrepreneurs);