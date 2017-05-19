import { Component, OnInit, Input } from '@angular/core';
import { MovieSearchService } from '../movie-search.service';
import { MovieTemplate } from '../model/movieTemplate';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 constructor(private router: Router) { }


 Submit(movie) {
  console.log(movie);
  this.router.navigate(['movie', movie]);
  }
  ngOnInit() {
  }

}
