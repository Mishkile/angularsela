import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stage3',
  templateUrl: './stage3.component.html',
  styleUrls: ['./stage3.component.css']
})
export class Stage3Component {

  constructor(private http : HttpClient) {}


  movies : any[] =[]

  getMoviesWithSameGenre() {
    const genre = sessionStorage["genre"]
    this.http.get<any[]>("https://api.tvmaze.com/shows").subscribe(data => {
      this.movies = data.filter(movie => movie.genres.includes(genre) )

    })


  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getMoviesWithSameGenre()
  }


}
