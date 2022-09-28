const main = () => {
    const favBands = ["We butter the bread with butter", "Royal Blod", "K Flay ", "Portishead","Muse","Nothing but thieves","Battle Tapes"];
    
    //Eliminando el ultimo elemento del array con POP 
    console.log(favBands);
    favBands.pop();
    console.log(favBands);

    //Imprimiento por AT
    const Muse1 = favBands.at(4);
    console.log(Muse1);

    //desestructuracion de un array 
    const [a,b,c,d,e,f] = favBands;
    console.log (d);
        
    //Añadiendo bandas con concat 
    const otherBands = ["Talking heads","Smashing pumpkins","The Marias"];
    const newBands = favBands.concat(otherBands);
    console.log (newBands);

    //Repitiendo la ultima banda con copyWthin
    console.log(newBands);
    newBands.copyWithin(0,8,9);
    console.log(newBands);
    newBands.copyWithin(2,8,9);
    console.log(newBands);

    //Funcion que cuenta cuantas veces se repite la ultima banda 
    const timesRepeat = (arr,item) => {
        let count = 0;
        for (i=0;i<=arr.length;i++){
            if (arr[i]===item) {
                count = count +1;
            }
        }
        return count;
    }
    const res = timesRepeat(newBands,"The Marias");
    console.log(res);

    //Array de peliculas que quiero ver
    const movies = [
        {
            id:1,
            name: "Your Name",
            DurationInMinutes: 112,
            Genre : "Anime, Drama, Fantasia,Romance"

        },
        {
            id:2,
            name: "Fade to black ",
            DurationInMinutes: 96,
            Genre: "Acción,Aventura,Fantasia"
        },
        {
            id:3,
            name: "Sacary Movie",
            DurationInMinutes: 88,
            Genre:"Comedia"
        }
    ]
    const watchedMovies = movies.filter(movie => movie.id !=3 );
    console.log (watchedMovies);

    
}

 main();