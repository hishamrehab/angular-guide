import { Component, output , signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
   calculate = output<InvestmentInput>();
  enteredInitialInvestment =  signal<number>(0);
  enteredAnnualInvestment = signal<number>(0);
  enteredExpectedReturn = signal<number>(5);
  enteredDuration = signal<number>(10);

  onSubmit() {
    this.calculate.emit({
     initialInvestment : +this.enteredInitialInvestment(),
     annualInvestment : +this.enteredAnnualInvestment(),
     expectedReturn : +this.enteredExpectedReturn(),
     duration : +this.enteredDuration()
    });
    this.enteredInitialInvestment.set(0);
    this.enteredAnnualInvestment.set(0);
    this.enteredExpectedReturn.set(5);
    this.enteredDuration.set(10);
  }
} 
