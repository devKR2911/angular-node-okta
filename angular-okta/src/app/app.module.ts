import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'userlist', component: UserListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent, LoginComponent, UserListComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
