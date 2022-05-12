import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'sobrenosotros' , component: SobreNosotrosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
