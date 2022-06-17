 import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie : string = "";

  poster : string = "";

  movieName : string = "";

  director : string = "";

  writer : string = "";

  starings : string = "";

  genres : string = "";

  Language : string = "";

  imdbRating : string = "";

  runtime : string = "";

  country : string = "";

  awards : string = "";

  relaseDate : string = "";

  plot : string = "";

  response : string = '';

  isCreate : boolean = false;


  constructor(public movieSer : MoviesService) { }

  ngOnInit(): void {
  }

  searchMovie()
  {
    this.isCreate = !this.isCreate
    this.movieSer.fetchMovieData(this.movie).subscribe({
      next : (data:any) =>
      {
        // console.log(data)
        this.isCreate = !this.isCreate;
        this.poster = data.Poster;
        this.movieName = data.Title;
        this.director = data.Director;
        this.writer = data.Writer;
        this.starings = data.Actors;
        this.genres = data.Genre;
        this.Language = data.Language;
        this.runtime = data.Runtime;
        this.country = data.Country;
        this.awards = data.Awards;
        this.relaseDate = data.Released;
        this.plot = data.Plot;
        this.response = data.Response;

      }
    })
  }

}
