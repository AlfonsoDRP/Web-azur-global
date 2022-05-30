import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ngOnInit(): void {
    $(document).ready(function () {
      window.scroll(0, 0);
    });
    this.Verfooter(0);
  }

  footer: boolean = true;
  Verfooter(valor:number) {
    setTimeout(() => {
      let path: String = window.location.pathname;
      console.log(path);
      if (path.includes('login')) {
        this.footer = false;
      }else{
        this.footer = true;
      }
    }, valor);
  }
}
