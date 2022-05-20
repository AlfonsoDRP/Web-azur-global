import { Component, OnInit } from '@angular/core';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  faUser = faUser;
  faCandado = faLock;
  ngOnInit(): void {
    $(document).ready(function(){
      window.scroll(0,0);
    })
  }

}
