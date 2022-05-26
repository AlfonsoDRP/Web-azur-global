import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.scss']
})
export class SobreNosotrosComponent  {
  
  numero_seccion:number = 0

  ngOnInit(): void {
    $(document).ready(function(){
      window.scroll(0,0);
    })
  }

  actionMenu(numero:number){
    this.numero_seccion = numero;
  }
}
