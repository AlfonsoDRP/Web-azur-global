import { Component, HostListener } from '@angular/core';
import {
  faBinoculars,
  faCircleCheck,
  faHandshake,
  faHourglass,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  ngOnInit(): void {
    $(document).ready(function () {
      window.scroll(0, 0);
    });
    this.calcularFormato()
  }

  estadoMovil:boolean = false;
  itemsPerSlide = 3;
  singleSlideOffset = true;
  noWrap = true;
  faReloj = faHourglass;
  faCompromiso = faHandshake;
  faCalidad = faCircleCheck;
  faFuturo = faBinoculars;


  @HostListener ('window:scroll') onWindowScroll() {
    let posScroll = window.scrollY;
    let derecha = document.getElementById("derecha");
    let izquierda = document.getElementById("izquierda");

    if (posScroll > 1100 && derecha && izquierda){
      derecha.style.right = "0";
      izquierda.style.left = "0";
      derecha.style.opacity = "1";
      izquierda.style.opacity = "1";

    }else if (posScroll < 1100 && derecha && izquierda){
      derecha.style.right = "-100px";
      izquierda.style.left = "-100px";
      derecha.style.opacity = "0";
      izquierda.style.opacity = "0";
      
    }
  }

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.calcularFormato();
  }

  slides = [
    { image: '../../../assets/piezas/AMORTIGUADORES.PNG', familia: 'Amortiguadores' },
    { image: '../../../assets/piezas/COMPRESOR.PNG', familia: 'Compresores' },
    { image: '../../../assets/piezas/FILTROS.PNG', familia: 'Filtros' },
    { image: '../../../assets/piezas/RODAMIENTOS.PNG', familia: 'Rodamientos' },
    { image: '../../../assets/piezas/espejo.png', familia: 'Espejos' },
    { image: '../../../assets/piezas/BATERIA.PNG', familia: 'Baterias' },
  ];

  calcularFormato(){
    let principal = document.getElementById("principal");
    let ancho = 0;
    if (principal) {
      ancho = principal.offsetWidth;
      this.estadoMovil = ancho <=  950;
    }
  }
}
