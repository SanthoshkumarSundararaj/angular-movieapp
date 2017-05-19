import { Injectable , OnInit } from '@angular/core';
import { MovieTemplate } from './model/movieTemplate';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MovieSearchService {
private moviesUrl = 'http://www.omdbapi.com/?t=';
constructor(private http: Http) { }
getMovies(path: string) {
    return this.http
      .get('http://www.omdbapi.com/?s=' + path)
      .map((res) => res.json().Search  || []);
  }


}
