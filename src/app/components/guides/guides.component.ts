import { Component } from '@angular/core';

@Component({
  selector: 'app-guide',
  standalone: true,
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css']
})
export class GuideComponent {

  pdfGuideUrl: string = 'assets/guides/guide-utilisation.pdf';
  onlineGuideUrl: string = 'https://example.com/guide-en-ligne';
}
