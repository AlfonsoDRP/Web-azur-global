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
    
    let historia = document.getElementById('historia');
    let valores = document.getElementById('valores');
    let mision = document.getElementById('mision');
    if (valores && mision && historia && this.numero_seccion != numero){
      historia.style.opacity = "0"
      valores.style.opacity = "0"
      mision.style.opacity = "0"
      historia.style.left = (numero == 0)? "-30vw": "30vw";
      valores.style.left = (numero == 1)? "-30vw": "30vw";
      mision.style.left = (numero == 2)? "-30vw": "30vw";
 
      setTimeout(() => {
        this.numero_seccion = numero;
      }, 500);
      setTimeout(() => {
        this.numero_seccion = numero;
        if (valores && mision && historia) {    
          historia.style.left = (numero == 0) ?  "0": historia.style.left;
          valores.style.left = (numero == 1) ?  "0": valores.style.left;
          mision.style.left = (numero == 2) ?  "0": mision.style.left;
          historia.style.opacity = "1"
          valores.style.opacity = "1"
          mision.style.opacity = "1"
        }
      }, 600);

    }
  }
}
