import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector:'app-root',
  imports: [RouterOutlet,ShortenPipe,FormsModule,FilterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularPipes_2_customPipes';
  searchVal:string = ''
  names:string[] = ['akon','bkon','ckon','dkon','yasirukodikara','sathirukodikara']

  addUser(){
    this.names.push('nimal')
  }
}
