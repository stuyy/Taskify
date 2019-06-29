import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSliderModule } from '@angular/material/slider';
import { ModalComponent } from './components/modal/modal.component';
import { NgbdModalContent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    NgbdModalContent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    NgbModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:  
  [
    NgbdModalContent
  ]
})
export class AppModule { }
