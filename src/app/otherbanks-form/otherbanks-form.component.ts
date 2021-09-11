import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

interface Loan {
  key: Number
  bankName: String
  amountAdvanced: Number
  dateGranted: String
  repaymentPeriod: String
  outstandingBalance: String
}


@Component({
  selector: 'app-otherbanks-form',
  templateUrl: './otherbanks-form.component.html',
  styleUrls: ['./otherbanks-form.component.css']
})
export class OtherbanksFormComponent implements OnInit {
  title = "Bank"

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  otherBanks = this.formBuilder.group({
    bankName: "",
    amountAdvanced: "",
    dateGranted: "",
    repaymentPeriod: "",
    outstandingBalance: ""
  })

  loans: Loan[] = []
  keys: IterableIterator<number> = this.loans.keys()

  onSubmit() :void {
    console.log(this.otherBanks.value)

    if (this.loans.length == 0 ) {
      this.addToList()
    }

    this.otherBanks.reset()

    this.router.navigateByUrl("/apply/success")
  }

  addToList(): void {
    let formValue = this.otherBanks.value;
    this.loans.push(formValue)
    this.keys = this.loans.keys()
    this.otherBanks.reset()
  }

  ngOnInit(): void {
  }

}

