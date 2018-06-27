import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { SeleccionComponent } from './netflix/seleccion/seleccion.component';

@NgModule({
  declarations: [
    AppComponent,
    SeleccionComponent
  ],
  imports: [
    BrowserModule, // ngIf ngFor
    FormsModule // ngModel
  ],
  //son muy parecidos a los servicios en nest para inyectar informacion en varios controladores en este caso en componentes
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
