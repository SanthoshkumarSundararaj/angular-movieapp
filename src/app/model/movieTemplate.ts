export class MovieTemplate {
 title: string;
 year: string;
 poster: string;
 imdbID: string;
 constructor(imdbID, title, year, poster) {
   this.imdbID = imdbID;
   this.title = title;
   this.year = year;
   this.poster = poster;

 }
 clone() {
   return new MovieTemplate(this.imdbID, this.title, this.year, this.poster);

 }
}
