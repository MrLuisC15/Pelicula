'use sctrict'

//console.log('js cargado');

class Pelicula{
    constructor(){
        //console.log('Se ha creado una película');
        //This es el objeto que ejecuta el codigo
        this.titulo = 'Tiroteo en Mississippi';
        this.pueblo = new Pueblo('TodoPolvo', 'muy polvoriento, en mitad del desierto de Arizona y a donde nadie querría llegar')
        this.narrador = new Narrador()
        this.paco = new PersonajeBueno('Paco',3,1)
        this.maria = new PersonajeBueno('Maria',2,1)
        this.morgan = new PersonajeMalo('Morgan',6,1)


        this.iniciar();

    }

    
    //Proceso principal
    iniciar(){
        document.write('<h1>' + this.titulo + '</h1>');
        document.write('<p>'+this.pueblo.nombre+' era un pueblo '+this.pueblo.descripcion+'</p>')
        this.narrador.hablar('Era una bonita mañana')
        this.paco.hablar('Hola '+this.maria.nombre+'. Hoy hace un día espléndido.')
        this.maria.hablar('Hola '+this.paco.nombre+', la verdad es que sí.')
        this.narrador.hablar('Ambos se miraron un instante y siguieron su camino...')
        this.narrador.hablar('Aparece un sujeto estraño en el pueblo con un sombrero de copa')
        this.morgan.hablar('Vaya basura de pueblo...')
        this.morgan.hablar('¡Eh tú! ¡Pringao! Dame ese caballo y la cartera')
        
        this.narrador.inicio('Maria y Paco se encuentran frente a Morgan e inician un tiroteo')
        
        let muere           //Variable, si = 1 el disparo no falla
        let disparador      //Variable para elegir quien efectua el disparo en el turno
        let morgandispara   //Variable para elegir a quien dispara Morgan
        
        while(this.morgan.vivo==1 && this.paco.vivo==1) {

            document.write('---------------------------------------------------------------')
            
            //Si maria ya no está viva que no cuente con ella para poder disparar
            if(this.maria.vivo==0) {
                disparador=this.narrador.random(2,3)
            }
            else {
                disparador=this.narrador.random(1,3)
            }
            
            //Switch para el disparador
            switch(disparador) {
                case 1:
                    if(this.maria.vivo==1) {
                        this.narrador.hablar('Maria aprieta el gatillo hacia Morgan')
                        this.maria.arma.disparar()
                    }
                    break;
                case 2:
                    if(this.paco.vivo==1) {
                        this.narrador.hablar('Paco aprieta el gatillo hacia Morgan')
                        this.paco.arma.disparar()
                    }
                    break;
                case 3:
                    if(this.morgan.vivo==1) {
                        if(this.maria.vivo==1) {
                            morgandispara=this.narrador.random(1,2)
                        }
                        else {
                            morgandispara=1
                        }
                        if(morgandispara==1) {
                            this.narrador.hablar('Morgan aprieta el gatillo hacia Paco')
                        }
                        else {
                            this.narrador.hablar('Morgan aprieta el gatillo hacia Maria')
                        }
                        this.morgan.arma.disparar()
                    }
            }

            muere=this.narrador.random(1,5)

            //En el caso de que la variable muere sea = a 1 el disparado muere
            if(muere==1) {
                switch(disparador) {
                    case 1:
                        if(this.maria.arma.balas>0) {
                            this.maria.arma.balas--
                            this.morgan.hablar('¡AY!')
                            this.narrador.hablar('El disparo de Maria habría dejado a Morgan abatido')
                            this.morgan.vivo=0;
                        }
                        else {
                            this.narrador.hablar('El arma de Maria se habría quedado sin balas')
                            this.maria.arma.cargar()
                        }
                        break;
                    case 2:
                        if(this.paco.arma.balas>0) {
                            this.paco.arma.balas--
                            this.morgan.hablar('¡AY!')
                            this.narrador.hablar('El disparo de Paco habría dejado a Morgan abatido')
                            this.morgan.vivo=0;
                        }
                        else {
                            this.narrador.hablar('El arma de Paco se habría quedado sin balas')
                            this.paco.arma.cargar()
                        }
                        break;
                    case 3:
                        if(this.morgan.arma.balas>0) {
                            this.morgan.arma.balas--
                            if(morgandispara==1) {
                                this.paco.hablar('¡AY!')
                                this.narrador.hablar('El disparo de Morgan habría dejado a Paco abatido')
                                this.paco.vivo=0;
                            }
                            else {
                                this.maria.hablar('¡AY!')
                                this.narrador.hablar('El disparo de Morgan habría dejado a Maria abatida')
                                this.maria.vivo=0;
                            }
                        }
                        else {
                            this.narrador.hablar('El arma de Morgan se habría quedado sin balas')
                            this.morgan.arma.cargar()
                        }
                }
            }
            else {
                //Switch en el caso de que la variable muere sea diferente a 1, dispara a otro lugar
                switch(disparador) {
                    case 1:
                        if(this.maria.arma.balas>0) {
                            this.maria.arma.balas--
                            this.narrador.fallo(this.maria.nombre)
                        }
                        else {
                            this.narrador.hablar('El arma de Maria se habría quedado sin balas')
                            this.maria.arma.cargar()
                        }
                        break;
                    case 2:
                        if(this.paco.arma.balas>0) {
                            this.paco.arma.balas--
                            this.narrador.fallo(this.paco.nombre)
                        }
                        else {
                            this.narrador.hablar('El arma de Paco se habría quedado sin balas')
                            this.paco.arma.cargar()
                        }
                        break;
                    case 3:
                        if(this.morgan.arma.balas>0) {
                            this.morgan.arma.balas--
                            this.narrador.fallo(this.morgan.nombre)
                        }
                        else {
                            this.narrador.hablar('El arma de Morgan se habría quedado sin balas')
                            this.morgan.arma.cargar()
                        }
                }
            }
        }

        //Mensaje final
        if(this.morgan.vivo==0 && this.maria.vivo==1 && this.paco.vivo==1) {
            this.narrador.final('Todos serían felices y comerían perdices.')
            document.write('<img src="img/morganloose.gif">')
        }
        else {
            if(this.morgan.vivo==1 && this.maria.vivo==0 && this.paco.vivo==0) {
                this.narrador.final('Morgan saquearía '+this.pueblo.nombre+' y se marcharía en un caballo.')
                document.write('<img src="img/morganwin.gif">')
            }
            else {
                if(this.morgan.vivo==1 && this.maria.vivo==1 && this.paco.vivo==0) {
                    this.narrador.final('Maria se marcharía corriendo esquivando las balas de Morgan')
                    document.write('<img src="img/run.gif">')
                }
                else {
                    if(this.morgan.vivo==0 && this.maria.vivo==1 && this.paco.vivo==0) {
                        this.narrador.final('Maria intentaría detener la hemorragia de Paco y conseguiría salvarle la vida')
                        document.write('<img src="img/mariawin.gif">')
                    }
                    else {
                        this.narrador.final('Paco intentaría detener la hemorragia de Maria y conseguiría salvarle la vida')
                        document.write('<img src="img/pacowin.gif">')
                    }
                }
            }
        }
    }
}

//Datos del pueblo
class Pueblo{
    constructor(nombre, descripcion) {
        this.nombre=nombre;
        this.descripcion=descripcion;
    }
}

//Mensajes del narrador y funcion random
class Narrador{
    hablar(texto){
        document.write('<p class="narrador">*'+texto+'*</p>')
    }

    inicio(texto){
        document.write('<h2 class="narrador">*'+texto+'*</h2>')
    }

    final(texto){
        document.write('<h2 class="narrador">*'+texto+'*</h2>')
    }

    fallo(personaje) {
        let objetodisparo
        let texto

        objetodisparo=this.random(1,5)

        switch(objetodisparo) {
            case 1:
                texto='habría dado en un barril.'
                break;
            case 2:
                texto='habría ido hacia las nubes.'
                break;
            case 3:
                texto='habría dado en la rueda de una carreta.'
                break;
            case 4:
                texto='habría chocado con el suelo.'
                break;
            case 5:
                texto='le habría dado en un sombrero de un civil asustado.'
        }

        document.write('<p class="narrador">*El disparo de '+personaje+' '+texto+'*</p>')
    }

    random(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

}

//Clase personaje
class Personaje{
    constructor(nombre, balas, vivo) {
        this.nombre=nombre
        this.arma=new Arma(balas)
        this.vivo=vivo
    }
    
}

//Clase extendida de Personaje
class PersonajeBueno extends Personaje{
    hablar(texto){
        document.write('<p class="negrita">'+this.nombre+': </p><p class="bueno">'+texto+'</p>')
    }
}

//Clase extendida de Personaje
class PersonajeMalo extends Personaje{
    hablar(texto){
        document.write('<p class="negrita">'+this.nombre+': </p><p class="malo">'+texto+'</p>')
    }
}

//Clase de arma que lleva las balas de las armas de cada personaje y envía mensaje en cada disparo o sin balas
class Arma{
    constructor(balas) {
        this.balas=balas
    }
    disparar(){
        if(this.balas>0) {
            document.write('<p class="disparo">¡¡PUM!! 💨</p>')
        }
        else {
            document.write('<p class="sinbalas">Click...</p>')
        }
    }
    cargar(){
        this.balas=3
    }
}


new Pelicula()


