import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserServices } from "../services/user.services";
import { MatSnackBar } from "@angular/material";
@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"]
})
export class LandingPageComponent implements OnInit {
  loginF: FormGroup;
  signF: FormGroup;
  loginFToggle = true;
  signFToggle = false;
  showSpinner = false;
  showSpinner_ = false;
  constructor(
    private fb: FormBuilder,
    private userService: UserServices,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loginF = this.createForm();
    this.signF = this.createForm();
  }

  createForm() {
    const form: FormGroup = this.fb.group({
      email: [],
      password: []
    });
    return form;
  }

  login() {
    this.showSpinner = true;
    this.userService.loginUser(this.loginF.value).subscribe(
      res => {
        console.log(res);
        this.snackBar.open("User login..");
      },
      err => {
        console.log(err);
        this.showSpinner = !true;
        this.snackBar.open("User not logged in. Try again");
      },
      () => {
        setTimeout(() => {
          this.loginF.reset();
          this.showSpinner = !true;
        }, 2000);
      }
    );
  }
  signup() {
    this.showSpinner_ = true;
    this.userService.createUser(this.signF.value).subscribe(
      res => {
        console.log(res);
        this.snackBar.open("Successfully created");
      },
      err => {
        console.log(err);
        if (err.error.res.code === 11000) {
          this.snackBar.open("Emails is already in use. Try with another", "", {
            duration: 4000
          });
        }
        this.showSpinner_ = false;
      },
      () => {
        this.showSpinner_ = false;
      }
    );
  }

  showSignF() {
    this.signFToggle = true;
    this.loginFToggle = false;
  }
}
