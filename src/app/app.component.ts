import { Component } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { RouterOutlet } from '@angular/router';
import { GuideComponent } from './guides/guides.component';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, GuideComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
