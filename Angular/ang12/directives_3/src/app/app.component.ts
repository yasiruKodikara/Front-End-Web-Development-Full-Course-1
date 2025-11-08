import { NgStyle,NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHighlightDirective } from './directives/app-highlight.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgStyle,NgClass,AppHighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives_3';
  isActive:boolean = true;

  get getActiveColor():string{
    return this.isActive?"red":"blue"
  }

  get getActiveCase():string{
    return this.isActive?"uppercase":"lowecase"
  }
}
