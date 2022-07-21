import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponentComponent } from './students-component/students-component.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { InfoStudijComponent } from './info-studij/info-studij.component';
import{HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponentComponent,
    StudentDetailComponent,
    InfoStudijComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
