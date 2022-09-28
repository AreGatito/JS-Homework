const main = () => {
    class Peliculas {
        nombres;
        generos;
        duración;
        directores;

        constructor (nombre,genero,duración,director) {
            this.nombres = nombre;
            this.generos = genero;
            this.duración = duración;
            this.directores = director;   
        
        }  
        peliculas (){
            this.greeting();
        }
        greeting() {
            console.log(`Quieres ver: ${this.nombres}, del genero: ${this.generos}, con duración de ${this.duración} minutos y dirigida por: ${this.directores} `);
        }
    }
      
    const Scott = new Peliculas ("Scott Pilgrim vs The World",["Acción","Comedia","Drama"],112,"Edgar Wrigth");
    console.log(Scott);
    const Mean = new Peliculas ("Mean Girls","Comedia",97,"Mark Waters");
    console.log(Mean);
    const Lala = new Peliculas ("Lalaland La ciudad de las estrellas",["Musical","Romance","Drama"],128,"Damien Chazelle");
    console.log(Lala);
    Lala.peliculas();
}
main ();