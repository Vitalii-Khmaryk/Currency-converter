import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  @Input() rates!: { [key: string]: number }
  currencyArray: string[] = ['UAH', 'USD', 'EUR'];
  firstCurrency = 'UAH';
  secondCurrency = 'USD';
  firstAmount = 1;
  secondAmount!: number;

  ngOnInit(): void {
    this.convertCurrency('first');
  }
  
  convertCurrency(from: 'first' | 'second'): void {
    if (from === 'first') {
      this.secondAmount = parseFloat(
        (this.firstAmount * this.rates[this.secondCurrency] / this.rates[this.firstCurrency]).toFixed(3)
      );
    } else {
      this.firstAmount = parseFloat(
        (this.secondAmount * this.rates[this.firstCurrency] / this.rates[this.secondCurrency]).toFixed(3)
      );
    }
  }
}
