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
        this.morgan = new PersonajeMalo('Morgan',4,1)


        this.iniciar();

    }

    random(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }
    
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

        
        let muere
        let disparador
        let morgandispara
        
        while(this.morgan.vivo==1 && this.paco.vivo==1) {

            disparador=this.random(1,3)

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
                        morgandispara=this.random(1,2)
                        if(morgandispara==1) {
                            this.narrador.hablar('Morgan aprieta el gatillo hacia Paco')
                        }
                        else {
                            this.narrador.hablar('Morgan aprieta el gatillo hacia Maria')
                        }
                        this.morgan.arma.disparar()
                    }
            }

            muere=this.random(1,5)

            if(muere==1) {
                switch(disparador) {
                    case 1:
                        if(this.maria.arma.balas>0) {
                            this.morgan.hablar('¡AY!')
                            this.narrador.hablar('El disparo de Maria habría dejado a Morgan abatido')
                            this.morgan.vivo=0;
                        }
                        else {
                            this.narrador.hablar('El arma de María se habría quedado sin balas')
                        }
                        break;
                    case 2:
                        if(this.paco.arma.balas>0) {
                            this.morgan.hablar('¡AY!')
                            this.narrador.hablar('El disparo de Paco habría dejado a Morgan abatido')
                            this.morgan.vivo=0;
                        }
                        else {
                            this.narrador.hablar('El arma de Paco se habría quedado sin balas')
                        }
                        break;
                    case 3:
                        if(this.morgan.arma.balas>0) {
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
                        }
                }
            }
        }

        //Mensaje final
        if(this.morgan.vivo==0 && this.maria.vivo==1 && this.paco.vivo==1) {
            this.narrador.final('Todos serían felices y comerían perdices.')
        }
        else {
            if(this.morgan.vivo==1 && this.maria.vivo==0 && this.paco.vivo==0) {
                this.narrador.final('Morgan saquearía todo '+this.pueblo.nombre+' y se marcharía con un caballo.')
            }
            else {
                if(this.morgan.vivo==1 && this.maria.vivo==1 && this.paco.vivo==0) {
                    this.narrador.final('María se marcharía corriendo esquivando las balas de Morgan')
                }
                else {
                    if(this.morgan.vivo==0 && this.maria.vivo==1 && this.paco.vivo==0) {
                        this.narrador.final('María intentaría detener la hemorrágia de Paco y conseguiría salvarle la vida')
                    }
                    else {
                        this.narrador.final('Paco intentaría detener la hemorrágia de María y conseguiría salvarle la vida')
                    }
                }
            }
        }
    }
}

class Pueblo{
    constructor(nombre, descripcion) {
        this.nombre=nombre;
        this.descripcion=descripcion;
    }
}

class Narrador{
    hablar(texto){
        document.write('<p class="narrador">*'+texto+'*</p>')
    }

    final(texto){
        document.write('<h2 class="narrador">*'+texto+'*</h2>')
    }
}

class Personaje{
    constructor(nombre, balas, vivo) {
        this.nombre=nombre
        this.arma=new Arma(balas)
        this.vivo=vivo
    }
    
}

class PersonajeBueno extends Personaje{
    hablar(texto){
        document.write('<p class="negrita">'+this.nombre+': </p><p class="bueno">'+texto+'</p>')
    }
}

class PersonajeMalo extends Personaje{
    hablar(texto){
        document.write('<p class="negrita">'+this.nombre+': </p><p class="malo">'+texto+'</p>')
    }
}

class Arma{
    constructor(balas) {
        this.balas=balas
    }
    disparar(){
        if(this.balas>0) {
            this.balas--
            document.write('<p>¡¡PUM!! - Balas restantes: '+this.balas+'</p>')
        }
        else {
            document.write('<p>Click...</p>')
            this.cargar()
        }
    }
    cargar(){
        this.balas=6
    }
}


new Pelicula()


