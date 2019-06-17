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
  login:string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public loginService:LoginService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
    
    authLogin:Login = this.loginService.getLoginAuth(this.login)
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  

  get f() { return this.loginForm.controls; }

  onSubmit() {;
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }else

    

    console.log(this.returnUrl);
    this.loggin = true;
    this.router.navigate(["main"]);

  }

}
