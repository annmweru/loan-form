import {Component} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: "app-personform",
  templateUrl: "./person-form.component.html",
  styleUrls: ["./person-form.component.css"],
})
export class PersonFormComponent {
  title = "Personal "
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}
    personForm = this.formBuilder.group({
      membershipNo: "",
      firstName: "",
      middleName: "",
      lastName : "",
      idPassport: "",
      town: "",
      estate: "",
      streetNo: "",
      yearsLived: "",
      monthsLived: "",
      rented: "",
      maritalStatus :"",
      numberOfDependents: ""
    })

  onSubmit() :void {
    this.personForm.reset()
    this.router.navigateByUrl("/apply/employment")
  }

}
