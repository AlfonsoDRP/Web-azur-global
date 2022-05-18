import { Component, OnInit } from '@angular/core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  faEmail=faEnvelope;
  faPhone=faPhone;
  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
