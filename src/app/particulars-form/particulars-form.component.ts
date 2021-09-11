import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-particulars-form',
  templateUrl: './particulars-form.component.html',
  styleUrls: ['./particulars-form.component.css']
})
export class ParticularsFormComponent implements OnInit {
  title = "Bank"
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}
  particularsForm = this.formBuilder.group({
    loanType : "",
    purposeOfLoan : "",
    amountApplied: "",
  })

  onSubmit() :void {
    this.particularsForm.reset()
    this.router.navigateByUrl("/apply/otherbanks")
  }

  ngOnInit(): void {
  }

}
