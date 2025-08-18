import { Component, inject, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {Candidature} from "./candidature.interface";
import { CandidaturesService } from '../../services/candidatures/candidatures.service';

@Component({
  selector: 'app-candidatures',
  standalone: true,
  templateUrl: './candidatures.component.html',
  imports: [
    FormsModule,
    NgForOf,
  ],
  styleUrls: ['./candidatures.component.css']
})
export class CandidaturesComponent implements OnInit {

  searchPlaceholder = 'Rechercher une candidature...';
  searchTerm: string = '';
  filterDomain= '';
  filterLevel = '';

  currentPage = 1;
  itemsPerPage = 3;

  domains = [
    { value: 'Informatique', label: 'Informatique' },
    { value: 'Gestion', label: 'Gestion' },
    { value: 'Mathématiques', label: 'Mathématiques' }
  ];

  levels = [
    { value: 'bac', label: 'Bac' },
    { value: 'licence', label: 'Licence' },
    { value: 'master', label: 'Master' },
    { value: 'doctorat', label: 'Doctorat'}
  ];


  private candidatureService = inject(CandidaturesService);
  candidatures: Candidature[] = [];

  ngOnInit() {
    this.candidatureService.getCandidatures().subscribe(
      candidatures => this.candidatures = candidatures
    );
  }

  get filteredCandidatures(): Candidature[] {
    return this.candidatures
        .filter(c =>
            (!this.searchTerm.toLowerCase() || c.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || c.institution.toLowerCase().includes(this.searchTerm.toLowerCase()))
          && (!this.filterDomain.toLowerCase() || c.title.toLowerCase().includes(this.filterDomain.toLowerCase()))
            && (!this.filterLevel.toLowerCase() || c.level.toLowerCase() === this.filterLevel)
        );
  }

  get printedCandidatures(): Candidature[] {
    return this.filteredCandidatures
      .slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage)
  }

  get totalPages(): number {
    return this.filteredCandidatures.length >=1 ? Math.ceil(this.filteredCandidatures.length / this.itemsPerPage) : 1;
  }

  changePage(page: number): void {
    this.currentPage = page;
  }
}
