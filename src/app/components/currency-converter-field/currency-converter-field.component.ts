import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currency-converter-field',
  template: `
    <div>
      <mat-form-field>
        <input matInput type="number" [(ngModel)]="amount" (input)="convert()">
      </mat-form-field>
      <mat-form-field>
        <mat-select [(ngModel)]="currency" (selectionChange)="convert()">
          <mat-option *ngFor="let currencyOption of currencyArray" [value]="currencyOption">{{currencyOption}}</mat-option>
        </mat-select>
      </mat-form-field>
    </div>
  `,
   styles:[
    'mat-form-field { width: 100%; }'
   ]
})
export class CurrencyConverterFieldComponent {
  @Input() currencyArray: string[] = [];
  @Input() currency: string = '';
  @Input() amount: number = 1;

  @Output() amountChange = new EventEmitter<number>();
  @Output() currencyChange = new EventEmitter<string>();

  convert(): void {
    this.amountChange.emit(this.amount);
    this.currencyChange.emit(this.currency);
  }
}
