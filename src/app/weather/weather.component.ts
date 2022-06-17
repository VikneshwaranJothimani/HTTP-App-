 import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  city: string= "";

  cityName : string = "";

  country : string;

  temperature : string = "";

  description : string = "";

  humidity : string ;

  errormsg : string = "";

  errorStatus : number;

  isCreate : boolean = false;

  show : boolean = false;

  date = new Date();

  icon : string  = "";

  wind : string ="";

  constructor(public weatherSer : WeatherService) { }

  ngOnInit(): void {
  }

  fetchWeatherData()
  {

    this.isCreate = !this.isCreate

    this.weatherSer.weatherData(this.city).subscribe({
      next : (data:any) =>
      {
        console.log(data);

        this.show = !this.show

        this.isCreate = !this.isCreate;

        this.cityName = data.name;
        
        this.country = data.sys.country;

        this.temperature = data.main.temp;

        this.humidity = data.main.humidity;

        this.errorStatus = data.cod;

        this.icon = "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png"

        this.wind = data.wind.speed;

        this.description = data.weather[0].description;
      },
      error : (data:any) =>
      {
        this.show = true;

        this.isCreate = !this.isCreate;

        this.errormsg = "City Not Found!!"

        this.errorStatus = data.status;
      },  
    })
  }

  

}
