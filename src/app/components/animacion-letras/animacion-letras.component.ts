import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animacion-letras',
  templateUrl: './animacion-letras.component.html',
  styleUrls: ['./animacion-letras.component.scss']
})
export class AnimacionLetrasComponent implements OnInit {

  @Input() palabra:string= "Hola Mundo";
  @Input() activo:boolean = true;
  @Input() delay:number = 500;
  @Input() duracion:number = 1000;

  array_palabra: string[] = [];

  ngOnInit(): void {
    this.array_palabra = this.palabra.split('');
  }

  letraMostrar(letra:string):string{
    return letra==' '? 'i': letra; 
  }

}
