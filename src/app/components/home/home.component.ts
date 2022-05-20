import { Component } from '@angular/core';
import {
  faCircleCheck,
  faHandshake,
  faHourglass,
  faPlaneDeparture,
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
  }
  constructor() {
    $(document).ready(function () {
      $(function () {
        // guardar scroll de la pagina
        $(window).on('scroll', function () {
          var scrollTop: any = $(window).scrollTop();

          // trigger de animacion en scroll
          if (scrollTop > 1000 && scrollTop < 1300) {
            $('.derecha').animate(
              {
                right: 0,
                opacity: '1',
              },
              'slow'
            );
            $('.izquierda').animate(
              {
                left: 0,
                opacity: '1',
              },
              'slow'
            );
          }
        });
      });
    });
  }

  scroll() {
    window.scroll(0, 0);
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
}
