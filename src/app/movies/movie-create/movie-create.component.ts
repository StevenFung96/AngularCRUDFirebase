import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.scss']
})
export class MovieCreateComponent implements OnInit {

  // movies: Observable<Movie[]>;
  moviesCollection: AngularFirestoreCollection<Movie>;
 
  movie: Movie = {
    id: '',
    title: '',
    director: '',
    stars: '',
    genres: '',
    year: null,
    duration: null,
    rating: null,
    thumbnail: ''
  };
 
  constructor(
    private db: AngularFirestore,
    private router: Router
  ) { }
 
  ngOnInit() {
    this.moviesCollection = this.db.collection<Movie>('movies');
  }

  createMovie() {
    this.moviesCollection.add(this.movie).then(() => {
      this.router.navigate(['/movie']);
    });
  }
}
