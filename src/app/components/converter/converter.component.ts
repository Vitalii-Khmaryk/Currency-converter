import { Component } from '@angular/core';
import { ExchangeRateService } from 'src/app/services/exchange-rate.service';


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {
  currencyArray: string[] = ['UAH', 'USD', 'EUR'];
  rates: {[key:string]:number} = {};
  firstCurrency: string = 'UAH';
  secondCurrency: string = 'USD';
  firstAmount: number = 1;
  secondAmount!: number;

  constructor(private exchangeRateService: ExchangeRateService) {
    this.exchangeRateService.getExchangeRates().subscribe(data => {
      this.rates = data.conversion_rates;
      this.convertFromFirst();
    });
  }

  convertFromFirst() {
    this.secondAmount = parseFloat((this.firstAmount * this.rates[this.secondCurrency] / this.rates[this.firstCurrency]).toFixed(3));
  }

  convertFromSecond() {
    this.firstAmount = parseFloat((this.secondAmount * this.rates[this.firstCurrency] / this.rates[this.secondCurrency]).toFixed(3));
  }

  onFirstCurrencyChange() {
    this.convertFromFirst();
  }

  onSecondCurrencyChange() {
    this.convertFromSecond();
  }
}
