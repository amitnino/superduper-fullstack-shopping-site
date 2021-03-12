import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../../../../../services/user/user.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  public loginForm: FormGroup;
  public hidePassword: boolean = false;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public _us: UserService,

  ) { };

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public submitLoginForm = () => {

    if (this.loginForm.invalid) return;

    const body = this.loginForm.value;

    this._us.loginUser(body);
    
  };

};
