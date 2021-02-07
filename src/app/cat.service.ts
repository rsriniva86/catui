import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http:HttpClient) {

   }
   public getCatBreeds():Observable<any>{
      return this.http.get('https://api.thecatapi.com/v1/breeds');            
   }
}
