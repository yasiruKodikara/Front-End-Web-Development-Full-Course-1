import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule],
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.css'
})
export class BuiltInPipesComponent {
  today:Date = new Date();
  text1:string = 'this is a sample text';
  amount:number = 123.3232234;
  percentVal:number = 0.234345456;

  jsonVal:object = {
    name:'akon',
    version:'1'
  };

  myArr :number[]= [1,2,3,4,5];

  myObj :{[key:string] : string} ={first:'one',second:'2nd'};
  
  //Impure pipes
  
}
