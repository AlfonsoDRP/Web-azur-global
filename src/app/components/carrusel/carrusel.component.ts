import { Component, HostListener, Input, OnInit } from '@angular/core';
import {faCaretLeft, faCaretRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss'],
})
export class CarruselComponent implements OnInit {


  ngOnInit(): void {
    let elemento = this.lista[this.lista.length - 1];
    this.elementos = this.lista.length;

    for (let i = 0; i < this.elementos; i++) {
      this.listaIds.push('elemento' + i);
    }
    setTimeout(() => {
      this.recalcularUbicacion(true);
    }, 0);
  }

  @Input() lista = [
    {
      image: '../../../assets/piezas/AMORTIGUADORES.PNG',
      familia: 'Amortiguadores',
    },
    {
      image: '../../../assets/piezas/AMORTIGUADORES.PNG',
      familia: 'Amortiguadores',
    },
    { image: '../../../assets/piezas/COMPRESOR.PNG', familia: 'Compresores' },
    { image: '../../../assets/piezas/COMPRESOR.PNG', familia: 'Compresores' },
    { image: '../../../assets/piezas/FILTROS.PNG', familia: 'Filtros' },
    { image: '../../../assets/piezas/FILTROS.PNG', familia: 'Filtros' },
    { image: '../../../assets/piezas/RODAMIENTOS.PNG', familia: 'Rodamientos' },
    { image: '../../../assets/piezas/RODAMIENTOS.PNG', familia: 'Rodamientos' },
  ];
  @Input() movil: boolean = false;
  @Input() ancho: string = "0";
  @Input() alto: string = "0";
  @Input() colorFondo: string = "";
  @Input() colorBoton: string = "";
  posicion: number = 0;
  centro: number = this.movil ? 1 : 2;
  listaIds: Array<string> = [];
  elementos = this.lista.length;
  movimientoActivo: boolean = false;
  iconoLeft = faCaretLeft;
  iconoRight = faCaretRight;

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.recalcularUbicacion(true);
  }
  
  dimesionesPrincipal():string {
    return "width: "+this.ancho+"; height: "+this.alto;
  }

  anchoCaja(): string {
    return this.movil ?'width: calc(33% );' : 'width: calc(100% / ' + 5 + ' );';
  }

  animacion(valor: boolean) {
    if (!this.movimientoActivo) {
      this.movimientoActivo = true;

      if (valor) {
        this.centro = this.centro + 1 >= this.elementos ? 0 : this.centro + 1;
      } else {
        this.centro = this.centro - 1 < 0 ? this.elementos - 1 : this.centro - 1;
      }

      this.recalcularUbicacion(valor);

      setTimeout(() => {
        this.movimientoActivo = false;
      }, 300);
    }
  }

  recalcularUbicacion(valor: boolean) {
    console.log("hola")
    let numero = [
      this.centro > 0 ? this.centro - 2 : this.centro == 0 ? this.elementos - 2 : this.elementos - 1,
      this.centro == 0 ? this.elementos - 1 : this.centro - 1, 
      this.centro, 
      this.centro + 1 < this.elementos ? this.centro + 1 : 0,
      this.centro + 2 < this.elementos ? this.centro + 2 : this.centro + 2 == this.elementos ? 0 : 1,
    ];

    for (let i = 0; i < this.elementos; i++) {
      let posicion = numero.indexOf(i);
      let elemento = document.getElementById('elemento' + i);
      if(this.movil){
      
        if (elemento) {
          elemento.style.visibility = (posicion == 2 || posicion == 1 || posicion == 3) ? 'visible' : 'hidden';
          elemento.style.left = 33 * (posicion-1) + '%';
        }
      }else{

        if (elemento) {
          elemento.style.visibility = posicion == 4 && valor ? 'hidden' : posicion == -1 && !valor ? 'hidden' : 'visible';
          elemento.style.left = 20 * posicion + '%';
        }
      }
    }
  }
}
