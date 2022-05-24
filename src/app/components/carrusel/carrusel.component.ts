import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit{
  ngOnInit(): void {
    this.elementos = this.lista.length
  }

  posicion:number = 0;
  centro:number = 1;
  @Input() lista = [
    {image: '../../../assets/piezas/AMORTIGUADORES.PNG',familia:"Amortiguadores"},
    {image: '../../../assets/piezas/COMPRESOR.PNG',familia:"Compresores"},
    {image: '../../../assets/piezas/FILTROS.PNG',familia:"Filtros"},
    {image: '../../../assets/piezas/RODAMIENTOS.PNG',familia:"Rodamientos"}
  ];

  elementos = this.lista.length

  anchoTodo():string{
    return "width: calc(100% * "+this.elementos+" / 3);"
  }
  anchoCaja():string{
    return "width: calc(100% / "+this.elementos+" );"
  }

  animacion(valor:boolean){
    let carrusel = document.getElementById('contenedor-carrusel');
    if(valor){
      if(this.posicion == 0){
        this.posicion = -1*this.elementos +3;
        this.centro = this.elementos-1;
      }else{
        this.posicion=this.posicion +1;
      }
    }else{
      if(this.posicion ==  -1*this.elementos +3){
        this.posicion = 0;
        this.centro = this.posicion;
      }else{
        this.posicion=this.posicion -1;
      }
    }
  
    
    this.centro=(valor)? this.centro -1:this.centro +1;
    let calculo = 100 / this.elementos*this.posicion* this.elementos/3;
    if(carrusel !== null){
      carrusel.style.left = calculo+"%";
    }
  }
}
