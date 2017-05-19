import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule} from '@angular/material';
import { MovieAppMaterialModule } from './movie-app-material.module';
import { MovieSearchService} from './movie-search.service';
import { SearchComponent } from './search/search.component';
import { MovieComponent } from './movies/movies.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'movie/:movie',  component: MovieComponent }
 ];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MovieComponent

  ],
    exports: [ RouterModule ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovieAppMaterialModule,
    [ RouterModule.forRoot(routes) ]

  ],
  providers: [ MovieSearchService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
