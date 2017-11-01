import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDatepickerPopup } from './datepicker-popup';

@Component({
  selector: 'my-app',
  template: `
    <div class="container-fluid">
    
    <hr>
    <p>
      This is a demo plnkr forked from the <strong>ng-bootstrap</strong> project: Angular powered Bootstrap.
      Visit <a href="https://ng-bootstrap.github.io/" target="_blank">https://ng-bootstrap.github.io</a> for more widgets and demos.
    </p>
    <hr>

    <ngbd-datepicker-popup></ngbd-datepicker-popup>
  </div>
  `
})
export class App {
}   

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, JsonpModule, NgbModule.forRoot()], 
  declarations: [App, NgbdDatepickerPopup],
  bootstrap: [App]
}) 
export class AppModule {}