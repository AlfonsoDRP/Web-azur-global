import { Component, HostListener } from '@angular/core';

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
  
  primerSubtitulo:boolean = true;
  segundoSubtitulo:boolean = false;
  terceroSubtitulo:boolean = false;


  @HostListener ('window:scroll') onWindowScroll() {
    let posScroll = window.scrollY;
    this.segundoSubtitulo = posScroll > 255;
    this.terceroSubtitulo = posScroll > 1071;
  }
}
