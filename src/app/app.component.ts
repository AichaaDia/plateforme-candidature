import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GuideComponent } from './guides/guides.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GuideComponent], // Ajoute ici
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plateforme-candidature';
}
