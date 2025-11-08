import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TDF2Component } from './tdf2/tdf2.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,TDF2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'templateDrivenForms_1';

  onSubmit(event:any){
    //To prevent the default behaviour of the form.(when the ngForms not in used)
    //event.preventDefault();

    //value accessing method1
    //console.log(event.target[0].value);
    //console.log(event.target[1].value);
    //console.log(event.target[2].value);

    //value accessing method2
    //console.log(event.target.name.value);
    //console.log(event.target.email.value);
    //console.log(event.target.address.value);

    console.log(event);
    console.log(event.value.name);
    console.log(event.value.email);
    console.log(event.value.address);
    


    console.log('Form Submitted');
  }

}
