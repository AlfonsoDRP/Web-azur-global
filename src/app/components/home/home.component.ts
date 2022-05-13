import { Component, OnInit } from '@angular/core';
import { faBitcoinSign, faCircleCheck, faClock, faHandshake } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
scroll(){
  window.scroll(0,0);
}
  itemsPerSlide = 3;
  singleSlideOffset = true;
  noWrap = true;
 faReloj = faClock;
 faCompromiso = faHandshake;
 faCalidad = faCircleCheck;
 faFuturo = faBitcoinSign;
  slidesChangeMessage = '';
 
  slides = [
    {image: '../../../assets/piezas/AMORTIGUADORES.PNG',familia:"Amortiguadores"},
    {image: '../../../assets/piezas/COMPRESOR.PNG',familia:"Compresores"},
    {image: '../../../assets/piezas/FILTROS.PNG',familia:"Filtros"},
    {image: '../../../assets/piezas/RODAMIENTOS.PNG',familia:"Rodamientos"},
    {image: '../../../assets/piezas/espejo.png',familia:"Espejos"},
    {image: '../../../assets/piezas/BATERIA.PNG',familia:"Baterias"},
    
  ];
 
  ngOnInit(): void {
  }

}
