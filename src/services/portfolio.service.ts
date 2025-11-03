import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private dataUrl = 'assets/portfolio.json';

  constructor(private http: HttpClient) {}

  getPortfolioData(): Observable<any> {
    return this.http.get(this.dataUrl);
  }
}
