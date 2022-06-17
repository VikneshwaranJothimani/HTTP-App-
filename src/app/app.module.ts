import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WeatherInterceptorService } from './weather-interceptor.service';
import { FormsModule } from '@angular/forms';
import { CelsiusPipe } from './pipes/celsius.pipe';
import { JokesComponent } from './jokes/jokes.component';
import { NewsComponent } from './news/news.component';
import { SummaryPipe } from './summary.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ActiveDirective } from './active.directive';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    WeatherComponent,
    HeaderComponent,
    FooterComponent,
    CelsiusPipe,
    JokesComponent,
    NewsComponent,
    SummaryPipe,
    LoginComponent,
    RegisterComponent,
    ActiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
