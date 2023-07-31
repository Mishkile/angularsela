import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-stage2',
  templateUrl: './stage2.component.html',
  styleUrls: ['./stage2.component.css']
})
export class Stage2Component {


  constructor(private http : HttpClient, private r : Router) {}

  movie : any = {}

  getMovieData() {
    const id = sessionStorage["movieid"]
    this.http.get<any>(`http://api.tvmaze.com/shows/${id}`).subscribe(data => {
    this.movie = data
    })
  }


  next(genre : string) {
    sessionStorage["genre"] = genre
    this.r.navigate(["/stage3"])
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getMovieData()
  }


}
