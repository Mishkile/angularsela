import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import {Router} from "@angular/router"

@Component({
  selector: 'app-stage1',
  templateUrl: './stage1.component.html',
  styleUrls: ['./stage1.component.css']
})
export class Stage1Component {


  constructor(private http : HttpClient, private r : Router) {}


  movies : any[] = []


  getData() {
    this.http.get<any[]>("http://api.tvmaze.com/shows").subscribe(data => {
      this.movies = data.splice(0,20)
    })
  }


  next(id : string) {
    sessionStorage["movieid"] = id
    this.r.navigate(["/stage2"])
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getData()
  }

}
