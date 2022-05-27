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

    if (valores && mision && historia  && numero == 0 && this.numero_seccion != numero){
      historia.style.left = "-30vw"
      valores.style.left = "30vw"
      mision.style.left = "30vw"
      historia.style.opacity = "0"
      valores.style.opacity = "0"
      mision.style.opacity = "0"
      setTimeout(() => {
        this.numero_seccion = numero;
      }, 500);
      setTimeout(() => {
        if (historia) {
          historia.style.left = "0"
          historia.style.opacity = "1.0"
        }
      }, 600);
      
    }
    if (valores && mision && historia  && numero == 1 && this.numero_seccion != numero){
      historia.style.left = "30vw"
      valores.style.left = "-30vw"
      mision.style.left = "30vw"
      historia.style.opacity = "0"
      valores.style.opacity = "0"
      mision.style.opacity = "0"
 
      setTimeout(() => {
        this.numero_seccion = numero;
      }, 500);
      setTimeout(() => {
        this.numero_seccion = numero;
        if (valores) {
          valores.style.left = "0"
          valores.style.opacity = "1.0"
        }
      }, 600);

    }
    if (valores && mision && historia  && numero == 2 && this.numero_seccion != numero){
      historia.style.left = "30vw"
      valores.style.left = "30vw"
      mision.style.left = "-30vw"
      historia.style.opacity = "0"
      valores.style.opacity = "0"
      mision.style.opacity = "0"
      setTimeout(() => {
        this.numero_seccion = numero;
      }, 500);
      setTimeout(() => {
        this.numero_seccion = numero;
        if (mision) {
          mision.style.left = "0"
          mision.style.opacity = "1.0"
        }
      }, 600);


    }
  }
}
