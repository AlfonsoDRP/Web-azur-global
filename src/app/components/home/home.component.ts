import { Component } from '@angular/core';
import {  faCircleCheck,  faHandshake, faHourglass, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {

  
constructor(){
  $(function() {
    // Escuchar el evento scroll
    $(window).on("scroll", function(evt) {
      var scrollTop:any = $(window).scrollTop();
      if (scrollTop > 1000 && scrollTop < 1500) {
        console.log(scrollTop)
        $(".derecha").addClass(".animado-derecha");
        $(".izquierda").addClass(".animado-izquierda");
      }else{
        console.log("fuera!!!!")
        $(".derecha").removeClass(".animado-derecha");
        $(".izquierda").removeClass(".animado-izquierda");
      }
    });

  });
}
  


scroll(){
  window.scroll(0,0);
}
  

  itemsPerSlide = 3;
  singleSlideOffset = true;
  noWrap = true;
  faReloj = faHourglass;
  faCompromiso = faHandshake;
  faCalidad = faCircleCheck;
  faFuturo = faPlaneDeparture;
  slidesChangeMessage = '';
  
  slides = [
    {image: '../../../assets/piezas/AMORTIGUADORES.PNG',familia:"Amortiguadores"},
    {image: '../../../assets/piezas/COMPRESOR.PNG',familia:"Compresores"},
    {image: '../../../assets/piezas/FILTROS.PNG',familia:"Filtros"},
    {image: '../../../assets/piezas/RODAMIENTOS.PNG',familia:"Rodamientos"},
    {image: '../../../assets/piezas/espejo.png',familia:"Espejos"},
    {image: '../../../assets/piezas/BATERIA.PNG',familia:"Baterias"},
  ];


}
