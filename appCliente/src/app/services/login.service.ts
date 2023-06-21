import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  login(email : string, password : string){
    return this.http.post("http://104.131.165.40/api/clientes/login", {email, password});
  }
  register (nombreCompleto  : string, password : string, email : string){
    return this.http.post("http://104.131.165.40/api/clientes/register", {nombreCompleto , password, email});
  }
}
