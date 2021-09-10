import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employment-form',
  templateUrl: './employment-form.component.html',
  styleUrls: ['./employment-form.component.css']
})
export class EmploymentFormComponent implements OnInit {

  title = "Employment"
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}
  employmentForm = this.formBuilder.group({
    applicantEmployer: "",
    physicalAddress: "",
    postalAddress: "",
    telephoneNumber: "",
    designation: "",
    staffNo: "",
    employmentTerms: "",
    typeOfBusiness: "",
    yearsOfOperation: "",
    businessIncome : "",
    rentalIncome: "",
    otherIncome: ""
  })

  onSubmit() :void {
    this.employmentForm.reset()
    this.router.navigateByUrl("/apply/bank")
  }

  ngOnInit(): void {
  }

}
