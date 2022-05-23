import { Component, OnInit } from '@angular/core';
import { faBars, faCoffee, faCross, faLock, faUser, faUserAstronaut, faXmark } from '@fortawesome/free-solid-svg-icons';

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
  emojis = [faBars,faXmark];

  

  
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

