import { Component, OnInit } from '@angular/core';
import { faBars, faCoffee, faUser, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faUser = faUser;
  faBarras = faBars;
  
  constructor() { }

  ngOnInit(): void {
  }

}
