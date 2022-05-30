import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent {
ngOnInit(): void {
  $(document).ready(function(){
    window.scroll(0,0);
  })
}

 fotos:any=["../../../assets/marcas/Logos/Momo.png","../../../assets/marcas/Logos/Ajusa.png", "../../../assets/marcas/Logos/Crc.png","../../../assets/marcas/Logos/JapanParts.png","../../../assets/marcas/Logos/KavoParts.png","../../../assets/marcas/Logos/Pmm.png","../../../assets/marcas/Logos/Trw.png","../../../assets/marcas/Logos/Momo.png","../../../assets/marcas/Logos/Ajusa.png", "../../../assets/marcas/Logos/Crc.png","../../../assets/marcas/Logos/JapanParts.png","../../../assets/marcas/Logos/KavoParts.png","../../../assets/marcas/Logos/Pmm.png","../../../assets/marcas/Logos/Trw.png"]

}
