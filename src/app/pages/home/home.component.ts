import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../components/auth/login/login.component';
import { RouterOutlet } from '@angular/router';
import { GuideComponent } from '../../components/guides/guides.component';
import { HeaderComponent } from "../../components/header/header.component";
import {CandidaturesComponent} from "../../components/candidatures/candidatures.component";
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [LoginComponent, GuideComponent, HeaderComponent, CandidaturesComponent, FooterComponent],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {
  }



}
