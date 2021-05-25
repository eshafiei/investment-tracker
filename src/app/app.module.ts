import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/containers/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/containers/footer/footer.component';
import { LoginComponent } from './auth/containers/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/containers/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './shared/containers/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
