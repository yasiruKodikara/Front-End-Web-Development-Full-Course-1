import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
input_value_1: any;
twoWayValue1:string = '';

keyPressed1(input:HTMLInputElement) {
  console.log(input.value);
  this.input_value_1 = input.value;
};

keyPressed2(input:HTMLInputElement) {
  console.log(input.id);
  

};

inputEvent2($event: KeyboardEvent) {
alert("a key downed")
};

inputEvent1(event:KeyboardEvent) {
console.log(event.key);
if(event.key=='Enter'){
  alert('hellow')
}



;}
  title = 'ang7_eventBinding';
  

  btnclick(){
    alert('button clicked');
  }
}


