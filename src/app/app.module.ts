import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomepageComponent } from './homepage/homepage.component';
import {PersonFormComponent} from "./person-form/person-form.component";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import { EmploymentFormComponent } from './employment-form/employment-form.component';
import { BankFormComponent } from './bank-form/bank-form.component';
import { ParticularsFormComponent } from './particulars-form/particulars-form.component';
import { OtherbanksFormComponent } from './otherbanks-form/otherbanks-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PersonFormComponent,
    EmploymentFormComponent,
    BankFormComponent,
    ParticularsFormComponent,
    OtherbanksFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path : "", component: HomepageComponent},
      {path: "apply/personal", component: PersonFormComponent},
      {path: "apply/employment", component: EmploymentFormComponent},
      {path: "apply/otherbanks", component: OtherbanksFormComponent},
      {path: "apply/bank", component: BankFormComponent},
      {path: "apply/particulars", component: ParticularsFormComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
