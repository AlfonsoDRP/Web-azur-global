import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss'],
})
export class CarruselComponent implements OnInit {
  ngOnInit(): void {
    let elemento = this.lista[this.lista.length - 1];
    this.lista.push(this.lista[0]);
    this.lista.unshift(elemento);
    this.elementos = this.lista.length;
    this.centro = this.movil ? 0 : 1;
  }
  @Input() lista = [
    {
      image: '../../../assets/piezas/AMORTIGUADORES.PNG',
      familia: 'Amortiguadores',
    },
    { image: '../../../assets/piezas/COMPRESOR.PNG', familia: 'Compresores' },
    { image: '../../../assets/piezas/FILTROS.PNG', familia: 'Filtros' },
    { image: '../../../assets/piezas/RODAMIENTOS.PNG', familia: 'Rodamientos' },
  ];
  @Input() movil: boolean = false;
  posicion: number = 0;
  centro: number = this.movil ? 0 : 1;

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.recaocularUbicacion();
  }

  elementos = this.lista.length;

  anchoTodo(): string {
    return this.movil
      ? 'width: calc(100% * ' + this.elementos + ');'
      : 'width: calc(100% * ' + this.elementos + ' / 3);';
  }
  anchoCaja(): string {
    return 'width: calc(100% / ' + this.elementos + ' );';
  }

  animacion(valor: boolean) {
    if (valor) {
      if (this.posicion == 0) {
        this.posicion = -1 * this.elementos + 3;
        this.centro = this.elementos - 1;
      } else {
        this.posicion = this.posicion + 1;
      }
    } else {
      if (this.posicion == -1 * this.elementos + 3) {
        this.posicion = 0;
        this.centro = this.posicion;
      } else {
        this.posicion = this.posicion - 1;
      }
    }
    this.recaocularUbicacion();
  }

  recaocularUbicacion() {
    let carrusel = document.getElementById('contenedor-carrusel');
    this.centro = this.movil ? this.posicion * -1 : this.posicion * -1 + 1;
    let calculo = this.movil
      ? (100 / this.elementos) * this.posicion * this.elementos
      : ((100 / this.elementos) * this.posicion * this.elementos) / 3;
    if (carrusel) {
      carrusel.style.left = calculo + '%';
    }
  }
}
