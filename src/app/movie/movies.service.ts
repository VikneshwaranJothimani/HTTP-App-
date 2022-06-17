import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public http : HttpClient) { }

  fetchMovieData(movie : string)
  {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("t", movie);
    queryParams = queryParams.append("apikey", "54b1509b");


   return this.http.get("https://www.omdbapi.com",{params : queryParams})
  }
}
