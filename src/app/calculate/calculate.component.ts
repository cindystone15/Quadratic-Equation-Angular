import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  @Input() a: number = 0;
  @Input() b: number = 0;
  @Input() c: number = 0;
  roots: { value: number, type: string }[] = [];
  delta: number = 0;
  root!: number;
  root1! : number;
  root2!: number; 


  constructor() {}

  calculateQuadraticEquation(): void {

    if(this.a ==0 && this.b != 0){
      this.root = -this.c / this.b;
      this.roots = [{value: this.root, type: 'linear'}];
      return;
    }


    // IT DOESNT WORK!!

    this.delta = (Math.pow(this.b,2) - 4*this.a*this.c);
    console.log(this.delta);

    if (this.delta < 0) {
      this.roots = [{ value: 0, type: 'imaginary' }];
      return;
    } else if (this.delta == 0) { // delta = 0 
        this.root = -this.b / (2 * this.a);
        this.roots = [{ value: this.root, type: 'real' }];
    } else {
        this.root1 = (-this.b - Math.sqrt(this.delta)) / (2 * this.a);
        this.root2 = (-this.b + Math.sqrt(this.delta)) / (2 * this.a);
        this.roots = [{ value: this.root1, type: 'double' }, { value: this.root2, type: 'double' }];
    }
  
  }

  ngOnInit(): void {
    //this.calculateQuadraticEquation();

  }
}
