import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//AGREGAR RouterModule PARA QUE FUNCIONEN LOS ROUTS
import{RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

//CREAR LA RUTAS
const appRoutes: Routes = [
  {path: "login", component: LoginComponent}//path es el subdirectorio del link ("myapp/login")
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)//PASAR LAS RUTAS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
