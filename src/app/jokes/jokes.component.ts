import { Component, OnInit } from '@angular/core';

import { JokesService } from './jokes.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  jokes: string = "";

  isCreate: boolean;

  constructor(public jokesSer: JokesService) { }

  ngOnInit(): void {
    this.jokesSer.fetchJokes();
  }

  displayJokes() {
    this.isCreate = !this.isCreate;

    this.jokesSer.fetchJokes().subscribe({
      next: (data: any) => {
        this.isCreate = !this.isCreate;

        this.jokes = data.value.joke;
      }
    })

  }

}
