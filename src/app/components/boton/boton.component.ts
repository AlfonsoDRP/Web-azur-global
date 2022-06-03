import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent  {
 @Input() router:any;
 @Input() contenido:any;
 @Input() estilo:string="basico";
 @Input() size:string= '100px';



 cambiarEstilo():string{
   return this.estilo;
 }


}
