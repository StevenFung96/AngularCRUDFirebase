import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieCreateComponent } from './movies/movie-create/movie-create.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';

const routes: Routes = [{
  path: 'movie',
  component: MoviesComponent
}, {
  path: 'movie/create',
  component: MovieCreateComponent
}, {
  path: 'movie/edit/:id',
  component: MovieEditComponent
}, {
  path: '**',
  redirectTo: 'movie'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
