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

 fotos:any=["../../../assets/marcas/LOGO-MOMOrecortada.png","../../../assets/marcas/LOGO-AJUSA.PNG", "../../../assets/marcas/LOGO-CRC.PNG","../../../assets/marcas/LOGO-JAPANPARTS.PNG","../../../assets/marcas/LOGO-KAVOPARTS.PNG","../../../assets/marcas/LOGO-PMM(2).png","../../../assets/marcas/LOGO-TRW.PNG","../../../assets/marcas/LOGO-MOMOrecortada.png","../../../assets/marcas/LOGO-AJUSA.PNG", "../../../assets/marcas/LOGO-CRC.PNG","../../../assets/marcas/LOGO-JAPANPARTS.PNG","../../../assets/marcas/LOGO-KAVOPARTS.PNG","../../../assets/marcas/LOGO-PMM(2).png","../../../assets/marcas/LOGO-TRW.PNG","../../../assets/marcas/LOGO-MOMOrecortada.png","../../../assets/marcas/LOGO-AJUSA.PNG", "../../../assets/marcas/LOGO-CRC.PNG","../../../assets/marcas/LOGO-JAPANPARTS.PNG","../../../assets/marcas/LOGO-KAVOPARTS.PNG","../../../assets/marcas/LOGO-PMM(2).png","../../../assets/marcas/LOGO-TRW.PNG"   ]

}
