import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogServiceService {
  constructor(private http: HttpClient) {}

  public get(url: string) {
    return this.http.get(url);
  }
}
