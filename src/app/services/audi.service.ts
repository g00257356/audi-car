import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {audi} from '../audi.model';
//import { Stream } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class audiService {

  constructor(private http: HttpClient) { }
  //observables for http methots
    getaudiData(): Observable<any> {
      return this.http.get("http://localhost:8081/api/audi");
    }

  addaudi(model: string, colour: string, condition: string, mileage: string): Observable<any> {
    const audi: audi = {model: model, colour: colour, condition: condition, mileage: mileage};
    return this.http.post("http://localhost:8081/api/audi",audi);
  }

  deleteaudi(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/audi/"+id);
  }

  getaudi(id:String): Observable<any> {
    return this.http.get("http://localhost:8081/api/audi/"+id);
  }

  updateaudi(id:String, model: string, colour: string, condition: string, mileage: string): Observable<any> {
    const audi: audi = {model: model, colour: colour, condition: condition, mileage: mileage};
  return this.http.put("http://localhost:8081/api/audi/"+id, audi);
  }
}
