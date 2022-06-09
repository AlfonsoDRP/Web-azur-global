import { Component, HostListener } from '@angular/core';
import myData from '../../../environments/pruebas/pruebas.json';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.scss']
})
export class SobreNosotrosComponent  {
  ngOnInit(): void {
    $(document).ready(function(){
      window.scroll(0,0);
    })
  }
  valoresPrueba = myData;
  
  primerSubtitulo:boolean = true;
  segundoSubtitulo:boolean = false;
  terceroSubtitulo:boolean = false;


  @HostListener ('window:scroll') onWindowScroll() {
    let posScroll = window.scrollY;
    this.segundoSubtitulo =(this.segundoSubtitulo) ? true: posScroll > 255;
    this.terceroSubtitulo =(this.terceroSubtitulo)? true: posScroll > 1071;
  }
}
