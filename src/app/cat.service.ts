import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private baseurl='https://api.thecatapi.com/v1';

  constructor(private http:HttpClient) {

   }
   public getBreeds():Observable<any>{
      return this.http.get(`${this.baseurl}/breeds`);            
   }
   public getDetailsOfBreed(breedID:string):Observable<any>{
    return this.http.get(`${this.baseurl}/images/search?breed_id=${breedID}`);            
 }

}
