import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  servicePopup(message:string){
    return alert("THis popup is from the service section, Called from "+message);
  }

  getUsers(){
    return this.http.get('https://reqres.in/api/users');
  }

}
