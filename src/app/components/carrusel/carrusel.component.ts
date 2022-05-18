import { Component, Input, OnInit } from '@angular/core';
import {faArrowLeftLong,faArrowRightLong  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit{

  tiempoAnimacion = 0.5;
  animancionActiva:boolean = false;
  posicion:number= 0;

  @Input() listaProductos =  [{image: '',familia:''}];
  
  
  productosMostrar = [{image: '',familia:''}];



  numeroProductos:number=0;
  
  faArrowLeftLong=faArrowLeftLong;
  faArrowRightLong=faArrowRightLong;

  ngOnInit(): void {
    this.productosMostrar[0] = Object.assign({}, this.listaProductos[0]);
    for (let index = 1; index < 5; index++) {
      this.productosMostrar.push(Object.assign({}, this.listaProductos[index]))
    }
    this.numeroProductos=this.listaProductos.length;
  }

  clikedLeft(){
    
    if(!this.animancionActiva) {
      this.animancionActiva = true;
      this.animacionIzquierda();
      setTimeout(() => { this.animancionActiva = false; }, 1300);
    };
  
  }
  clikedRight(){
    
    if(!this.animancionActiva) {
      this.animancionActiva = true;
      this.animacionDerecha();
      setTimeout(() => { this.animancionActiva = false; }, 1300);
    };
  }

  animacionIzquierda(){
    let derechaOculto = document.getElementById('derechaOculto');
    let derecha = document.getElementById('derecha');
    let derechaImagen = document.getElementById('derechaImagen');
    let izquierda = document.getElementById('izquierda');
    let centro = document.getElementById('centro');
    let centroImagen = document.getElementById('centroImagen');
    
    if(derecha !== null && derechaImagen !== null && izquierda !== null && centro !== null && centroImagen !== null && derechaOculto !== null){
      derechaOculto.style.animation ='animacion-derecha-entrada 0.5s 0.5s forwards';
      derecha.style.animation ='animacion-derecha-centro 1s forwards';
      derechaImagen.style.animation ='agrandar-imagen 0.5s 0.5s forwards';
      izquierda.style.animation ='animacion-izquierda-salida 0.5s 0.5s forwards';
      centro.style.animation ='animacion-centro-izquierda 1s forwards';
      centroImagen.style.animation ='encoger-imagen  1s forwards';


      setTimeout(() => {
        if(derecha !== null && derechaImagen !== null && izquierda !== null && centro !== null && centroImagen !== null && derechaOculto !== null){
          derechaOculto.style.animation ='';
          derecha.style.animation ='';
          derechaImagen.style.animation ='';
          izquierda.style.animation ='';
          centro.style.animation ='';
          centroImagen.style.animation ='';
        } 
      }, 1010);
      setTimeout(() => {
        this.cambiarProductos(false);
      }, 990);
    }
  }

  animacionDerecha(){
    let izquierdaOculto = document.getElementById('izquierdaOculto');
    let derecha = document.getElementById('derecha');
    let izquierda = document.getElementById('izquierda');
    let izquierdaImagen = document.getElementById('izquierdaImagen');
    let centro = document.getElementById('centro');
    let centroImagen = document.getElementById('centroImagen');
    if(derecha !== null && izquierdaImagen !== null && izquierda !== null && centro !== null && centroImagen !== null && izquierdaOculto !== null){
      izquierdaOculto.style.animation ='animacion-izquierda-entrada 0.5s 0.5s ';
      derecha.style.animation ='animacion-derecha-salida 0.5s 0.5s ';
      izquierda.style.animation ='animacion-izquierda-centro 1s ';
      izquierdaImagen.style.animation ='agrandar-imagen 0.5s 0.5s ';
      centro.style.animation ='animacion-centro-derecha 1s ';
      centroImagen.style.animation ='encoger-imagen  1s ';
      setTimeout(() => {
        if(derecha !== null && izquierdaImagen !== null && izquierda !== null && centro !== null && centroImagen !== null && izquierdaOculto !== null){
          izquierdaOculto.style.animation ='';
          derecha.style.animation ='';
          izquierda.style.animation ='';
          izquierdaImagen.style.animation ='';
          centro.style.animation ='';
          centroImagen.style.animation ='';
        } 
      }, 1010);
      setTimeout(() => {
        this.cambiarProductos(true);
      }, 990);
    }
  }
  
  cambiarProductos(movimiento:boolean){
    console.log((this.posicion+3)%this.numeroProductos)
    console.log(this.posicion)
    
    if(movimiento){
      this.posicion = (this.posicion - 1 == -1)? this.numeroProductos-1 : this.posicion - 1;
      this.productosMostrar[4] = Object.assign({}, this.productosMostrar[3]);
      this.productosMostrar[3] = Object.assign({}, this.productosMostrar[2]);
      this.productosMostrar[2] = Object.assign({}, this.productosMostrar[1]);
      this.productosMostrar[1] = Object.assign({}, this.productosMostrar[0]);
      this.productosMostrar[0] = Object.assign({}, this.listaProductos[this.posicion]);
    }else{
      this.posicion = (this.posicion + 1 == this.numeroProductos)? 0 : this.posicion + 1;
      this.productosMostrar[0] = Object.assign({}, this.productosMostrar[1]);
      this.productosMostrar[1] = Object.assign({}, this.productosMostrar[2]);
      this.productosMostrar[2] = Object.assign({}, this.productosMostrar[3]);
      this.productosMostrar[3] = Object.assign({}, this.productosMostrar[4]);
      this.productosMostrar[4] = Object.assign({}, this.listaProductos[(this.posicion+4)%this.numeroProductos]);
    }

  }
}
