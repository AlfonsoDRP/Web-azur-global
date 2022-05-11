import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'sobrenosotros' , component: SobreNosotrosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
