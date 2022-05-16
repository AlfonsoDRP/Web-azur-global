import { Component, OnInit } from '@angular/core';
import {faArrowLeftLong,faArrowRightLong  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent {
  tiempoAnimacion = 0.5;
  
  faArrowLeftLong=faArrowLeftLong;
  faArrowRightLong=faArrowRightLong;

  clikedLeft(){
    let derechaOculto = document.getElementById('derechaOculto');
    let derecha = document.getElementById('derecha');
    let derechaImagen = document.getElementById('derechaImagen');
    let izquierda = document.getElementById('izquierda');
    let centro = document.getElementById('centro');
    let centroImagen = document.getElementById('centroImagen');
    if(derecha !== null && derechaImagen !== null && izquierda !== null && centro !== null && centroImagen !== null && derechaOculto !== null){
      derechaOculto.style.animation ='animacion-derecha-entrada 0.3s 0.3s ';
      derecha.style.animation ='animacion-derecha-centro 0.6s ';
      derechaImagen.style.animation ='agrandar-imagen 0.3s 0.3s ';
      izquierda.style.animation ='animacion-izquierda-salida 0.3s 0.3s ';
      centro.style.animation ='animacion-centro-izquierda 0.6s ';
      centroImagen.style.animation ='encoger-imagen  0.6s ';
      console.log('hola')
      setTimeout(() => {
        if(derecha !== null && derechaImagen !== null && izquierda !== null && centro !== null && centroImagen !== null && derechaOculto !== null){
          derechaOculto.style.animation ='';
          derecha.style.animation ='';
          derechaImagen.style.animation ='';
          izquierda.style.animation ='';
          centro.style.animation ='';
          centroImagen.style.animation ='';
      } }, 600);
      
    }
    
  }
  clikedRight(){
    let izquierdaOculto = document.getElementById('izquierdaOculto');
    let derecha = document.getElementById('derecha');
    let izquierda = document.getElementById('izquierda');
    let izquierdaImagen = document.getElementById('izquierdaImagen');
    let centro = document.getElementById('centro');
    let centroImagen = document.getElementById('centroImagen');
    if(derecha !== null && izquierdaImagen !== null && izquierda !== null && centro !== null && centroImagen !== null && izquierdaOculto !== null){
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
      } }, 600);
    }
    
  }

}
