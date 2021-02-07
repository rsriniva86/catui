import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CatmenuComponent } from './catmenu/catmenu.component';
import { CatService } from './cat.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CatmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
