import { AfterContentChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  page: string = "";

  article: any[] = [];

  isCreate: boolean;

  constructor(public newsSer: NewsService) { }

  ngOnInit(): void {

    this.loadNews()
  }


  loadNews() {
    this.isCreate = !this.isCreate;

    this.newsSer.fetchNews(this.page).subscribe({
      next: (data: any) => {
        this.isCreate = !this.isCreate;
        
        this.article = data.articles
      }
    })
  }

}
