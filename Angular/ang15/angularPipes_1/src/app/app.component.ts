import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuiltInPipesComponent } from "./built-in-pipes/built-in-pipes.component";
import { FilterUsersComponent } from "./filter-users/filter-users.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BuiltInPipesComponent, FilterUsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularPipes_1';
}
