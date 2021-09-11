import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bank-form',
  templateUrl: './bank-form.component.html',
  styleUrls: ['./bank-form.component.css']
})
export class BankFormComponent implements OnInit {
  title = "Bank"
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}
  bankForm = this.formBuilder.group({
    accountName : "",
    accountNo: "",
    bankName: "",
    bankCode: "",
    branch: "",
    branchCode: "",
  })

  onSubmit() :void {
    this.bankForm.reset()
    this.router.navigateByUrl("/apply/particulars")
  }

  ngOnInit(): void {
  }
}
