import { Component } from '@angular/core';
import { ExchangeRateService } from './services/exchange-rate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'currency-converter';
  rates: { [key: string]: number } = {};
  constructor(
    private exchangeRateService: ExchangeRateService
  ){
    this.exchangeRateService.getExchangeRates().subscribe(data => {
      this.rates = data.conversion_rates;
    });
  }
  
}
