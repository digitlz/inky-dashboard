import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weather } from './weather.model';
import { apiKey } from './weather_api';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public location: string = 'Zürich';
  public weatherToday: Weather;
  public weatherTomorrow: Weather;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getCurrentWeather('Zurich')
      .subscribe(currentWeather => {
        this.weatherToday = currentWeather.main;
      });
    this.getForecast('Zurich')
      .subscribe(forecast => {
        this.weatherTomorrow = forecast.list[5].main;
      });
  }

  private getCurrentWeather(loc: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/weather?q=${loc}&appid=${apiKey}&units=metric`);
  }

  private getForecast(loc: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/forecast?q=${loc}&appid=${apiKey}&units=metric`);
  }

}
