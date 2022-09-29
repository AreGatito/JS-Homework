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
    Scott.greeting();

    class Documental extends Peliculas {
        type = "documental"

        constructor(nombres,generos,duración,directores){
            super(nombres,generos,duración,directores);
        }
        greeting(){
            console.log(`Quieres ver: ${this.nombres}, del genero: ${this.generos}, con duración de ${this.duración} minutos, dirigida por: ${this.directores} y que es un ${this.type}`);
        }
    }
    const Dilema = new Documental ("El dilema de las redes sociales","Drama",94,"Jeff Orlowski");
    Dilema.greeting();


    class Animación extends Peliculas {
        type = "animación"
         
        constructor (nombres,generos,duración,directores) {
            super (nombres,generos,duración,directores);
        }
        greeting(){
            console.log(`Quieres ver: ${this.nombres}, del genero: ${this.generos}, con duración de ${this.duración} minutos, dirigida por: ${this.directores} y que es una ${this.type}`);
        }
    }
    const Inter = new Animación ("Interestellar 5555","Ciencia ficción y Aventura",90,"Leiji Matsumoto, Kazuhisa Takenouchi, Hirotoshi Rissen, Daisuke Nishio");
    Inter.greeting();
    const Cent = new Animación ("5 centimetros por segundo","Romance y Drama",63,"Makoto Shinkai");
    Cent.greeting();

    class Biografica extends Peliculas {
        type = "biografica"
        isBEER;
        message;

        constructor(nombres,generos,duración,directores,isBEER) {
            super (nombres,generos,duración,directores)
            this.isBEER = isBEER
        }
        evaluate (){
            if(this.isBEER = true) {
                this.message = "está basada en hechos reales"
            } else (this.isBEER = false); {
                this.message = "no esta basada en hechos reales "
            }
        }
        greeting(){
            this.evaluate();
            console.log(`Quieres ver: ${this.nombres}, del genero: ${this.generos}, con duración de ${this.duración} minutos, dirigida por: ${this.directores}, que es una pelicula ${this.type} y que ${this.message}`);

        }
    }
    
    const Teoria = new Biografica ("La teoria del todo","Romance y drama",123,"James Marsh",true);
    Teoria.greeting();
    const Talent = new Biografica ("Talentos ocultos","Drama,Ficción,Historica",127,"Theodore Melfi",false);
    Talent.greeting();
}   
main ();