import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { MovieSearchService } from '../movie-search.service';
import { MovieTemplate } from '../model/movieTemplate';


@Component({
  selector: 'app-movie',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [ MovieSearchService ]
})
export class MovieComponent implements OnInit {
a: MovieTemplate[];

constructor( private moviesearchservice: MovieSearchService,
private route: ActivatedRoute) { }
ngOnInit(): void {
this.route.params
.switchMap(( params: Params ) =>
this.moviesearchservice.getMovies(params['movie']))
.subscribe( a => this.a = a);
 }
}
