import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientServerCom1Service {

  private baseUrl = "http://localhost:8000/";

  constructor() { }
}
