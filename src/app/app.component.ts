import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit(): void {
    $(document).ready(function(){
      window.scroll(0,0);
    })
  }
  
  footer:boolean=true;
  Verfooter(valor:boolean){
    this.footer=valor;
  }
}
