import { Injectable, inject, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Candidature } from '../../components/candidatures/candidature.interface';

@Injectable({
  providedIn: 'root'
})
export class CandidaturesService {

  private http: HttpClient = inject(HttpClient);
  candidatures: WritableSignal<Candidature[]> = signal<Candidature[]>([]);
  readonly url: string = 'assets/utils/Candidatures.json';

  constructor() { }

  getCandidatures(): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.url);
  }
}
