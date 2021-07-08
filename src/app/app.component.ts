import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  visibilityOutcome: Boolean = false;
  visibilityIncome: Boolean = false;
  visibilityAssets: Boolean = false;
  visibilityCapital: Boolean = false;
  visibilityLiabilities: Boolean = false;

  clickOutcome(): void{
    this.visibilityOutcome = true;
    this.visibilityIncome = false;
    this.visibilityAssets = false;
    this.visibilityCapital = false;
    this.visibilityLiabilities = false;
  }

  clickIncome(): void{
    this.visibilityIncome = true;
    this.visibilityOutcome = false;
    this.visibilityAssets = false;
    this.visibilityCapital = false;
    this.visibilityLiabilities = false;
  }
  clickAssets(): void{
    this.visibilityIncome = false;
    this.visibilityOutcome = false;
    this.visibilityAssets = true;
    this.visibilityCapital = false;
    this.visibilityLiabilities = false;
  }
  clickCapital(): void{
    this.visibilityIncome = false;
    this.visibilityOutcome = false;
    this.visibilityAssets = false;
    this.visibilityCapital = true;
    this.visibilityLiabilities = false;
  }
  clickLiabilities(): void{
    this.visibilityIncome = false;
    this.visibilityOutcome = false;
    this.visibilityAssets = false;
    this.visibilityCapital = false;
    this.visibilityLiabilities = true;
  }
  
}
