import { Component, ViewChild } from '@angular/core';
import { CalculateComponent } from './calculate/calculate.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  // title = 'angular-quadratic-equation';

  a: number = 0;
  b : number = 0;
  c : number =0;

  @ViewChild(CalculateComponent) calculateComponent!: CalculateComponent;

  addElements(a:HTMLInputElement, b:HTMLInputElement, c:HTMLInputElement): boolean{

    const aValue = Number(a.value);
    const bValue = Number(b.value);
    const cValue = Number(c.value);

    this.a = aValue; 
    this.b = bValue;
    this.c = cValue; 

    this.calculateComponent.a = aValue;
    this.calculateComponent.b = bValue;
    this.calculateComponent.c = cValue;

    
    console.log(this.calculateComponent.a);
    console.log(this.calculateComponent.b);
    console.log(this.calculateComponent.c);
    



    this.calculateComponent.calculateQuadraticEquation();
    return false;
  }

  // calculateQuadraticEquation():void{
  //   this.calculateComponent.calculateQuadraticEquation();
  // }
}
