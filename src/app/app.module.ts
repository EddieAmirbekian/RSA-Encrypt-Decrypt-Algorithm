import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  TuiAlertService,
  TuiButtonModule,
  TuiDataListModule,
  TuiLabelModule,
  TuiRootModule,
  TuiTooltipModule
} from "@taiga-ui/core";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {
  TuiAccordionModule, TuiCheckboxLabeledModule,
  TuiInputModule,
  TuiSelectModule,
  TuiTextAreaModule
} from "@taiga-ui/kit";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    TuiAccordionModule,
    TuiButtonModule,
    TuiCheckboxLabeledModule,
    TuiDataListModule,
    TuiInputModule,
    TuiLabelModule,
    TuiRootModule,
    TuiSelectModule,
    TuiTextAreaModule,
    TuiTooltipModule,
  ],
  providers: [
    TuiAlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
