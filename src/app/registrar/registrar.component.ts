import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { User } from '../model/user';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  registrarForm: FormGroup;
  userRegistro: User;
  registred: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    public loginService: LoginService) { }

  ngOnInit() {

    this.registrarForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      nome: ['', Validators.required],
      profile: ['', Validators.required]
    });
  }
  get f() { return this.registrarForm.controls; }

  onRegistrar() {
    this.registred = true;

    this.loginService.preparaInserção(this.registrarForm.controls.login.value,
      this.registrarForm.controls.password.value, this.registrarForm.controls.nome.value,
      this.registrarForm.controls.profile.value);
  }
}
