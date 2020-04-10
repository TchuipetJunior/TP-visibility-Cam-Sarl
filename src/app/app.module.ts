import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './auth/auth.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './Services/auth.service';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './Services/auth-guard.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './Services/user.service';
import { NewUserComponent } from './new-user/new-user.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { UserMidifieComponent } from './user-midifie/user-midifie.component';

const appRoutes: Routes = [
 // { path: 'appareils', canActivate: [AuthGuard],  component: AppareilViewComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'users', canActivate: [AuthGuard], component: UserListComponent},
  { path: 'new-user', component: NewUserComponent},
  { path: 'admins', canActivate: [AuthGuard], component: AdminListComponent},
  { path: 'users/:id', component: UserMidifieComponent},
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**',  redirectTo: '/not-found' }
] 

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FourOhFourComponent,
    UserListComponent,
    NewUserComponent,
    AdminListComponent,
    UserMidifieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
