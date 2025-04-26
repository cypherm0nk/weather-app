import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
private apiKey='f74031681b298b8682329c3eb5e1486c';
  constructor(private http:HttpClient) { }
  getWeatherDatas(cityName:string):Observable<any>{
    return this.http?.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}`,{responseType:'json'});
  }
}
