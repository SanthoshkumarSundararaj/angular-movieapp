import { MovieTemplate } from '../model/movieTemplate';
/*Test for MovieTemplate model
Update test code to instansiate new MovieTemplate in beforEach() block*/

describe('MovieTemplate', () => {
   it('has title', () => {
      const Movie = new MovieTemplate('tt0120338', 'Titanic', '1997', 'https://images-na.ssl-images-amazon.com/images/M/MV5.jpg');
   expect(Movie.title).toBe('Titanic');
 });
 it('has imdb Id', () => {
   const Movie = new MovieTemplate('tt0120338', 'Titanic', '1997', 'https://images-na.ssl-images-amazon.com/images/M/MV5.jpg');
   expect(Movie.imdbID).toBe('tt0120338');
 });
 it('has poster', () => {
   const Movie = new MovieTemplate('tt0120338', 'Titanic', '1997', 'https://images-na.ssl-images-amazon.com/images/M/MV5.jpg');
   expect(Movie.poster).toBe('https://images-na.ssl-images-amazon.com/images/M/MV5.jpg');
 });
 it('has year', () => {
   const Movie = new MovieTemplate('tt0120338', 'Titanic', '1997', 'https://images-na.ssl-images-amazon.com/images/M/MV5.jpg');
   expect(Movie.year).toBe('1997');
 });
 it('can clone itself', () => {
   const Movie = new MovieTemplate('tt0120338', 'Titanic', '1997', 'https://images-na.ssl-images-amazon.com/images/M/MV5.jpg');
   const clone = Movie.clone();
   expect(Movie).toEqual(clone);
 });
});
