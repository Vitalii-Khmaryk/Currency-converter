import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

export interface ExchangeRateResponse {
  base_code: string;
  conversion_rates: { [key: string]: number };
  documentation: string;
  result: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
}
@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  private apiUrl = `https://v6.exchangerate-api.com/v6/${environment.apiKey}/latest/UAH`;
  constructor(private http: HttpClient) { }

  getExchangeRates(): Observable<ExchangeRateResponse> {
    return this.http.get<ExchangeRateResponse>(this.apiUrl);
  }
}
