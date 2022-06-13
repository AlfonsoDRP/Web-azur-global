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
    this.calcularFormato();
  }
  escalaCabecera: number = 1.0;
  estadoMovil: boolean = false;
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

  @HostListener('window:scroll') onWindowScroll() {
    let posScroll = window.scrollY;
    
    let cont1 = document.getElementById('contuno');
    let cont2 = document.getElementById('contdos');
    let cont3 = document.getElementById('conttres');
    let cont4 = document.getElementById('contcuatro');
    let primero = document.getElementById('texto-primero');
    let segundo = document.getElementById('texto-segundo');
    let tercero = document.getElementById('texto-tercero');
    let cuarto = document.getElementById('texto-cuarto');
    let imagen1 = document.getElementById('img-primero');
    let imagen2 = document.getElementById('img-segundo');
    let imagen3 = document.getElementById('img-tercero');
    let imagen4 = document.getElementById('img-cuarto');
<<<<<<< HEAD
    let circulo1 = document.getElementById('circulo1');
    let circulo2 = document.getElementById('circulo2');
    let circulo3 = document.getElementById('circulo3');
    let circulo4 = document.getElementById('circulo4');
    let circulo5 = document.getElementsByClassName('circulo');
=======
    let circulo1 = document.getElementById('logoanimado1');
    let circulo2 = document.getElementById('logoanimado2');
    let circulo3 = document.getElementById('logoanimado3');
    let circulo4 = document.getElementById('logoanimado4');
    let logoSup1 = document.getElementById('logoSup1');
    let logoInf1 = document.getElementById('logoInf1');
    let logoIzq1 = document.getElementById('logoIzq1');
    let logoSup2= document.getElementById('logoSup2');
    let logoInf2= document.getElementById('logoInf2');
    let logoIzq2= document.getElementById('logoIzq2');
    let logoSup3= document.getElementById('logoSup3');
    let logoInf3= document.getElementById('logoInf3');
    let logoIzq3= document.getElementById('logoIzq3');
    let logoSup4= document.getElementById('logoSup4');
    let logoInf4= document.getElementById('logoInf4');
    let logoIzq4= document.getElementById('logoIzq4');
>>>>>>> joaquin

    if (posScroll > 1000 && primero && imagen1 && cont1 && circulo1 && logoSup1 && logoInf1 && logoIzq1) {
      primero.style.bottom = '0';
      primero.style.opacity = '1';
      cont1.style.opacity = '1';
      imagen1.style.transform = 'scale(1.3)';
      circulo1.style.animationPlayState = 'running';
      logoSup1.style.top = '0';
      logoSup1.style.left= '0';
      logoInf1.style.right= '101px';
      logoInf1.style.top= '37px';
      logoIzq1.style.left= '-215px';
      
      
      this.bandera1 = true;
    }


<<<<<<< HEAD
    if (posScroll > 1500 && segundo && imagen2 && cont2 && circulo2 && circulo5) {
=======
    if (posScroll > 1500 && segundo && imagen2 && cont2 &&circulo2  &&logoSup2 && logoInf2 && logoIzq2) {
>>>>>>> joaquin
      segundo.style.bottom = '0';
      segundo.style.opacity = '1';
      cont2.style.opacity = '1';
      imagen2.style.transform = 'scale(1.3)';
      circulo2.style.animationPlayState = 'running';

      this.bandera2 = true;
      logoSup2.style.top = '0';
      logoSup2.style.left= '0';
      logoInf2.style.right= '101px';
      logoInf2.style.top= '37px';
      logoIzq2.style.left= '-215px';
    }


    if (posScroll > 2000 && tercero && imagen3 && cont3 && circulo3 &&logoSup3 && logoInf3 && logoIzq3) {
      tercero.style.bottom = '0';
      tercero.style.opacity = '1';
      cont3.style.opacity = '1';
      imagen3.style.transform = 'scale(1.3)';
      circulo3.style.animationPlayState = 'running';
      logoSup3.style.top = '0';
      logoSup3.style.left= '0';
      logoInf3.style.right= '101px';
      logoInf3.style.top= '37px';
      logoIzq3.style.left= '-215px';
      this.bandera3 = true;
    }


    if (posScroll > 2500 && cuarto && imagen4 && cont4 && circulo4 &&logoSup4&&logoInf4&&logoIzq4) {
      cuarto.style.bottom = '0';
      cuarto.style.opacity = '1';
      cont4.style.opacity = '1';
      imagen4.style.transform = 'scale(1.3)';
      circulo4.style.animationPlayState = 'running';
      logoSup4.style.top = '0';
      logoSup4.style.left= '0';
      logoInf4.style.right= '101px';
      logoInf4.style.top= '37px';
      logoIzq4.style.left= '-215px';
      this.bandera4 = true;
    }

  }

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.calcularFormato();
  }

  slides = [
    {
      image: '../../../assets/piezas/AMORTIGUADORES.PNG',
      familia: 'Amortiguadores',
    },
    { image: '../../../assets/piezas/COMPRESOR.PNG', familia: 'Compresores' },
    { image: '../../../assets/piezas/FILTROS.PNG', familia: 'Filtros' },
    { image: '../../../assets/piezas/RODAMIENTOS.PNG', familia: 'Rodamientos' },
    { image: '../../../assets/piezas/espejo.png', familia: 'Espejos' },
    { image: '../../../assets/piezas/BATERIA.PNG', familia: 'Baterias' },
  ];

  calcularFormato() {
    let principal = document.getElementById('principal');
    let ancho = 0;
    if (principal) {
      ancho = principal.offsetWidth;
      this.estadoMovil = ancho <= 950;
      this.escalaCabecera = (ancho < 1300) ? ancho / 1300 :  1.0;
    }
  }
}
