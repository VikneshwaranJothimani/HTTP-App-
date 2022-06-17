
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor(public http : HttpClient) { }

  fetchJokes()
  {
   return this.http.get("http://api.icndb.com/jokes/random")
  }
}
