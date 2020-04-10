import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/User.model'

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor( private formBuilder: FormBuilder,
               private userService: UserService,
               private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
 
  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      admin: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', Validators.required]

    });
  }

  onSubnitForm(){
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['id'],
      formValue['firstName'],
      formValue['lastName'],
      formValue['age'],
      formValue['email'],
      formValue['admin'],
      formValue['login'],
      formValue['password']
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }

}
