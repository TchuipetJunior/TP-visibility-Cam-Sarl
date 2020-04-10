import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  authForm: FormGroup;

  constructor( private AuthService: AuthService,  
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.authStatus = this.AuthService.isAuth;
  }

  onSignIn() {
    this.initForm();
    this.AuthService.signIn().then(
      () => {
        this.authStatus = this.AuthService.isAuth;
        this.router.navigate(['users']);
      }
    );
  }

  onSignOut() {
    this.AuthService.signOut();
    this.authStatus = this.AuthService.isAuth;
  }

  initForm(){
    this.authForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

}
