import { Component, OnInit } from '@angular/core';
import {faArrowLeftLong,faArrowRightLong  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent {
  tiempoAnimacion = 0.5;
  animancionActiva:boolean = false;
  posicion:number= 0;

  listaProductos =  [
    {image: '../../../assets/piezas/AMORTIGUADORES.PNG',familia:"Amortiguadores"},
    {image: '../../../assets/piezas/COMPRESOR.PNG',familia:"Compresores"},
    {image: '../../../assets/piezas/FILTROS.PNG',familia:"Filtros"},
    {image: '../../../assets/piezas/RODAMIENTOS.PNG',familia:"Rodamientos"},
    {image: '../../../assets/piezas/espejo.png',familia:"Espejos"},
    {image: '../../../assets/piezas/BATERIA.PNG',familia:"Baterias"}
  ]
  
  productosMostrar = [
    {image: '../../../assets/piezas/AMORTIGUADORES.PNG',familia:"Amortiguadores"},
    {image: '../../../assets/piezas/COMPRESOR.PNG',familia:"Compresores"},
    {image: '../../../assets/piezas/FILTROS.PNG',familia:"Filtros"},
    {image: '../../../assets/piezas/RODAMIENTOS.PNG',familia:"Rodamientos"},
    {image: '../../../assets/piezas/espejo.png',familia:"Espejos"}
  ];

  numeroProductos:number=this.listaProductos.length;
  
  faArrowLeftLong=faArrowLeftLong;
  faArrowRightLong=faArrowRightLong;

  clikedLeft(){
    if(!this.animancionActiva) this.animacionIzquierda();
  
  }
  clikedRight(){
    if(!this.animancionActiva) this.animacionDerecha();
  }

  animacionIzquierda(){
    let derechaOculto = document.getElementById('derechaOculto');
    let derecha = document.getElementById('derecha');
    let derechaImagen = document.getElementById('derechaImagen');
    let izquierda = document.getElementById('izquierda');
    let centro = document.getElementById('centro');
    let centroImagen = document.getElementById('centroImagen');
    
    if(derecha !== null && derechaImagen !== null && izquierda !== null && centro !== null && centroImagen !== null && derechaOculto !== null){
      this.animancionActiva = true;
      derechaOculto.style.animation ='animacion-derecha-entrada 0.3s 0.3s ';
      derecha.style.animation ='animacion-derecha-centro 0.6s ';
      derechaImagen.style.animation ='agrandar-imagen 0.3s 0.3s ';
      izquierda.style.animation ='animacion-izquierda-salida 0.3s 0.3s ';
      centro.style.animation ='animacion-centro-izquierda 0.6s ';
      centroImagen.style.animation ='encoger-imagen  0.6s ';

      setTimeout(() => {
        if(derecha !== null && derechaImagen !== null && izquierda !== null && centro !== null && centroImagen !== null && derechaOculto !== null){
          derechaOculto.style.animation ='';
          derecha.style.animation ='';
          derechaImagen.style.animation ='';
          izquierda.style.animation ='';
          centro.style.animation ='';
          centroImagen.style.animation ='';
          this.animancionActiva = false;
          this.cambiarProductos(false);
      } }, 600);
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
      this.animancionActiva = true;
      izquierdaOculto.style.animation ='animacion-izquierda-entrada 0.3s 0.3s ';
      derecha.style.animation ='animacion-derecha-salida 0.3s 0.3s ';
      izquierda.style.animation ='animacion-izquierda-centro 0.6s ';
      izquierdaImagen.style.animation ='agrandar-imagen 0.3s 0.3s ';
      centro.style.animation ='animacion-centro-derecha 0.6s ';
      centroImagen.style.animation ='encoger-imagen  0.6s ';
      setTimeout(() => {
        if(derecha !== null && izquierdaImagen !== null && izquierda !== null && centro !== null && centroImagen !== null && izquierdaOculto !== null){
          izquierdaOculto.style.animation ='';
          derecha.style.animation ='';
          izquierda.style.animation ='';
          izquierdaImagen.style.animation ='';
          centro.style.animation ='';
          centroImagen.style.animation ='';
          this.animancionActiva = false;
          this.cambiarProductos(true);
      } }, 601);
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
