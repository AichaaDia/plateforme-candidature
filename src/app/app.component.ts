import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { RouterOutlet } from '@angular/router';
import { GuideComponent } from './guides/guides.component';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [LoginComponent, GuideComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor() {
  }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

}
