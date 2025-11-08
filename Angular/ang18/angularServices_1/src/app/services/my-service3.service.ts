import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class MyService3 {
  MotherMessage3 = 'Hello world 3';

  constructor(private loginService:LoginService) { 
    console.log('MyService3 constructor called');
  }
}
