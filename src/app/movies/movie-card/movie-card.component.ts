import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

@Component({
 selector: 'app-movie-card',
 templateUrl: './movie-card.component.html',
 styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

 @Input()
 movie: Movie;


 @Input()
 isHideButton = false;

 movieDocument: AngularFirestoreDocument<Movie>;

 constructor(
   private db: AngularFirestore,
 ) { }

 ngOnInit() {
 }

 deleteMovie() {
   this.movieDocument = this.db.doc<Movie>('movies/' + this.movie.id);
   this.movieDocument.delete();
 }
}

