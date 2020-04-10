import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/User.model';

@Component({
  selector: 'app-user-midifie',
  templateUrl: './user-midifie.component.html',
  styleUrls: ['./user-midifie.component.scss']
})
export class UserMidifieComponent implements OnInit {

  firstName: string;
  lastName: string;
  age: number;
  email: string;
  admin: boolean;
  login: string;
  password: string;
  
  userForm: FormGroup;

  constructor( private formBuilder: FormBuilder,
               private userService: UserService,
               private route: ActivatedRoute,
               private router: Router ) { }

  ngOnInit() {
    const id= this.route.snapshot.params['id'];
    this.firstName = this.userService.getUserById(+id).firstName;
    this.lastName = this.userService.getUserById(+id).lastName;
    this.age = this.userService.getUserById(+id).age;
    this.email = this.userService.getUserById(+id).email;
    this.admin = this.userService.getUserById(+id).admin;
    this.login = this.userService.getUserById(+id).login;
    this.password = this.userService.getUserById(+id).password;
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
