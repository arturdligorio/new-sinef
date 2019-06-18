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

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public loginService: LoginService
  ) {
      if (this.loginService.isLogged) {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigate([this.returnUrl]);
      }
  }

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
