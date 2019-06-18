import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public loginService: LoginService
  ) { }

  ngOnInit() { 

    if (this.loginService.isLogged()) {
      console.log('ta logado');
      this.router.navigate(['/main']);
    }

    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loginService.login(this.loginForm.controls.login.value, this.loginForm.controls.password.value)
  }
}
