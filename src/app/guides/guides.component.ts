import { Component } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css']
})
export class GuideComponent {
  // Liens vers les guides (à adapter selon ton besoin)
  pdfGuideUrl: string = 'assets/guides/guide-utilisation.pdf';
  onlineGuideUrl: string = 'https://example.com/guide-en-ligne';
}
