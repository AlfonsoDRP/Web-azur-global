import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { faBars,  faLock, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faUser = faUser;
  falock = faLock;
  faBarras = faBars;
  bandera = true;
  comienzo = true;
  cambio = true;
  emojis = [faBars,faXmark];

  @Output() footervisible = new EventEmitter<boolean>();
  
  
  @HostListener ('window:scroll', ['$event']) onWindowScroll() {
    let posScroll= window.scrollY;
    if (posScroll > 100) {
      this.cambio = false;
    } else {
      this.cambio = true;
      
    }
  }

 cambioBandera(){
   this.bandera = !this.bandera;
   this.comienzo = false;
   if (this.bandera === true){
     this.faBarras = this.emojis[0];
     setTimeout(() => {
      this.comienzo = true;
    }, 1000);
   }else{
    this.faBarras = this.emojis[1];
    
   }
   
 }

  constructor() { }

  ngOnInit(): void {
    
  }

}

