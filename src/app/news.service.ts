import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public http : HttpClient) { }

  fetchAllNews()
  {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("country", 'in');
    queryParams = queryParams.append("apiKey", "408b4153b994422d8638da72f2d3ac5b");

   return this.http.get("https://newsapi.org/v2/top-headlines" , {params : queryParams})

  }

  fetchNews(news:string)
  {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("country", 'in');
    queryParams = queryParams.append("category", news)
    queryParams = queryParams.append("apiKey", "408b4153b994422d8638da72f2d3ac5b");

   return this.http.get("https://newsapi.org/v2/top-headlines" , {params : queryParams})
  }
}
