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
  bandera1 = false;
  bandera2 = false;
  bandera3 = false;
  bandera4 = false;
  
  @HostListener ('window:scroll') onWindowScroll() {
    let posScroll = window.scrollY;
    console.log(posScroll)
    // let derecha = document.getElementById("derecha");
    // let izquierda = document.getElementById("izquierda");
    let cont1 = document.getElementById("contuno");
    let cont2 = document.getElementById("contdos");
    let cont3 = document.getElementById("conttres");
    let cont4 = document.getElementById("contcuatro");
    let primero = document.getElementById("texto-primero");
    let segundo = document.getElementById("texto-segundo");
    let tercero = document.getElementById("texto-tercero");
    let cuarto = document.getElementById("texto-cuarto");
    let imagen1 = document.getElementById("img-primero");
    let imagen2 = document.getElementById("img-segundo");
    let imagen3 = document.getElementById("img-tercero");
    let imagen4 = document.getElementById("img-cuarto");
    

    // if (posScroll > 1100 && derecha && izquierda){
    //   derecha.style.right = "0";
    //   izquierda.style.left = "0";
    //   derecha.style.opacity = "1";
    //   izquierda.style.opacity = "1";
    // }else if (posScroll < 1100 && derecha && izquierda){
    //   derecha.style.right = "-100px";
    //   izquierda.style.left = "-100px";
    //   derecha.style.opacity = "0";
    //   izquierda.style.opacity = "0";
    // }

    if (posScroll > 1000 && primero && imagen1 && cont1){
      primero.style.bottom = "0";
      primero.style.opacity = "1"
      cont1.style.opacity = "1";
      imagen1.style.transform = "scale(1.3)";
      this.bandera1 = true;
      }
    // }else if(posScroll < 1000 && primero){
    //   primero.style.right = "-100px";
    //   primero.style.opacity = "0";
    // }

    if (posScroll > 1500 && segundo && imagen2 && cont2){
      segundo.style.bottom = "0";
      segundo.style.opacity = "1";
      cont2.style.opacity = "1";
      imagen2.style.transform = "scale(1.3)";
      this.bandera2 = true;
    }
    // }else if(posScroll < 1500 && segundo){
    //   segundo.style.left = "-100px";
    //   segundo.style.opacity = "0";
    // }

    if (posScroll > 2000 && tercero && imagen3 && cont3){
      tercero.style.bottom = "0";
      tercero.style.opacity = "1";
      cont3.style.opacity = "1";
      imagen3.style.transform = "scale(1.3)";
      this.bandera3 = true;}
    // }else if(posScroll < 2000 && tercero){
    //   tercero.style.right = "-100px";
    //   tercero.style.opacity = "0";
    // }

    if (posScroll > 2500 && cuarto && imagen4 && cont4){
      cuarto.style.bottom = "0";
      cuarto.style.opacity = "1";
      cont4.style.opacity = "1";
      imagen4.style.transform = "scale(1.3)";
      this.bandera4 = true;}
    // }else if(posScroll<2500 && cuarto){
    //   cuarto.style.left = "-100px";
    //   cuarto.style.opacity = "0";
    // }
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
