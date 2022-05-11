import { Component, OnInit } from '@angular/core';

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
  singleSlideOffset = false;
  noWrap = false;
 
  slidesChangeMessage = '';
 
  slides = [
    {image: '../../../assets/piezas/AMORTIGUADORES.PNG',familia:"Amortiguadores"},
    {image: '../../../assets/piezas/COMPRESOR.PNG',familia:"Compresores"},
    {image: '../../../assets/piezas/FILTROS.PNG',familia:"Filtros"},
    {image: '../../../assets/piezas/RODAMIENTOS.PNG',familia:"Rodamientos"},
    {image: '../../../assets/piezas/espejo.png',familia:"Espejos"},
    {image: '../../../assets/piezas/BATERIA.PNG',familia:"Baterias"},
    
  ];
 
  onSlideRangeChange(indexes: number[]|void): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }
  ngOnInit(): void {
  }

}
