/*Console log directo*/
console.log("Arely Montoro Cecilio");

/*Console log por variable*/
const fullName = "Arely Montoro Cecilio";
console.log(fullName);

/*Edad como número*/
console.log (22);

/*Edad por variable*/
const myAge =22;
console.log(myAge)

/*Bandas favoritas en Array*/
const BandasFavoritas =["Three Days Grace","Nothing but Thieves","Battle Tapes","Royal Blood","Muse"];
console.log(BandasFavoritas);
console.log(BandasFavoritas[1]);
console.log(BandasFavoritas[3]);

/*Objeto llamado banda */
const band= {
    nameband:"Royal Blood",
    integrants: 2,
    album:{
        AlbumName:"Typhoons",
        NumberOfSongs:11,
        DurationInMinutes: 38,
        ReleaseDate: (30/04/2021),
    },
    active: true,
    genders: ["Rock Alternativo","Garage Rock"],
}
console.log(band.nameband);
console.log(band.album.AlbumName);
console.log(band.album.DurationInMinutes);
console.log(band.integrants);
console.log(band.genders[0]);