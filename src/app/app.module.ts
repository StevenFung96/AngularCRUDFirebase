import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MoviesComponent } from './movies/movies.component';
import { MovieCreateComponent } from './movies/movie-create/movie-create.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MovieFormComponent } from './movies/movie-form/movie-form.component';
import { MovieCardComponent } from './movies/movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieCreateComponent,
    MovieEditComponent,
    MovieFormComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
