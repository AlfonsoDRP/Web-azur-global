import { Component, OnInit } from '@angular/core';
import { faBars, faCoffee, faCross, faUser, faUserAstronaut, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faUser = faUser;
  faBarras = faBars;
  bandera = true;
  emojis = [faBars,faXmark]
 cambioBandera(){
   this.bandera= !this.bandera;
   if (this.bandera === true){
     this.faBarras = this.emojis[0];
   }else{
    this.faBarras = this.emojis[1];
   }
 }
  constructor() { }

  ngOnInit(): void {
  }

}
