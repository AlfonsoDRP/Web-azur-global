import { Component, OnInit } from '@angular/core';
import { faAt, faEnvelope, faLocation, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faLocation=faLocationPin;
  faEmail=faEnvelope;
  faPhone=faPhone;
  constructor() { }

  ngOnInit(): void {
  }

}
