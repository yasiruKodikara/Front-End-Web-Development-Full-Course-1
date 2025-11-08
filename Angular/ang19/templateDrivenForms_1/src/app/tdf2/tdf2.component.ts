import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf2',
  imports: [FormsModule],
  templateUrl: './tdf2.component.html',
  styleUrl: './tdf2.component.css',
  
})
export class TDF2Component {
  @ViewChild('f') form! : NgForm;
  title:string = "templateDrivenForms_2";

  onSubmit(){
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

    console.log(this.form);
    console.log(this.form.value.name);
    console.log(this.form.value.email);
    console.log(this.form.value.address);
    console.log(this.form.value.gender);
    


    console.log('Form Submitted');
  }

  keyUp(name:any){
    console.log(name)
  }


  //if you want to fill the entire form: setValue({})
  //unless you  want to fill the entire form: patchValue({})
  setData(){
    this.form.form.setValue(
      {
        address:'234 road kandy',
        gender:'Male',
        name:'John david',
        email:'john@gmail.com'
      }
    )
  }
}
