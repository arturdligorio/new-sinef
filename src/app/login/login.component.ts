import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginService } from 'src/app/service/login.service';
import { Login } from 'src/app/model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  telaLogin = true;
  loginForm: FormGroup;
  returnUrl: string;
  submitted = false;
  loggin: boolean = false;
  login: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public loginService: LoginService
  ) {

    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });


  }

  ngOnInit() { }



  get f() { return this.loginForm.controls; }

  onSubmit() {
    console.log(this.loginForm.controls.login.value);
    console.log(this.loginForm.controls.password.value);
    this.loginService.login(this.loginForm.controls.login.value, this.loginForm.controls.password.value);
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
}
