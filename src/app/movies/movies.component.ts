import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
 selector: 'app-movies',
 templateUrl: './movies.component.html',
 styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

 movies$: Observable<Movie[]>;
 moviesCollection: AngularFirestoreCollection<Movie>;

 constructor(
   private db: AngularFirestore
 ) { }

 ngOnInit() {
   const orderBy = ref => ref.orderBy('rating', 'desc');
   this.moviesCollection = this.db.collection<Movie>('movies', orderBy);
   this.movies$ = this.moviesCollection
     .snapshotChanges()
     .pipe(
       map(movies => {
         return movies.map(movie => {
           const data = movie.payload.doc.data() as Movie;
           const id = movie.payload.doc.id;
           return { ...data, id };
         });
       })
     );
 }
}

