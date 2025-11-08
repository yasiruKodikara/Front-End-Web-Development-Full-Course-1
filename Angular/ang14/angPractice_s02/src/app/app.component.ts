import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ContentComponent, FooterComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angPractice_s02';
  
  btnclick(){
    alert('btn')
  };

  event1(){
    console.log('keyuped');
    console.log()
  };

  event2(){
    console.log('keydowned')
  };

  event3(){
    console.log('keypressed')
  };

  
}
