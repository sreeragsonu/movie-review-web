import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  [x: string]: any;
  type = '';
  id='';
  url='';
  movies:any;
  movie:any;

  constructor(private route:ActivatedRoute, private http:HttpClient){}
  ngOnInit():void{
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if(this.type === 'trending'){
      this.url='http://localhost:4200/assets/data/popular.json';
    }
    this.getMovie();
  }

  getMovie(){
    this.http.get(this.url).subscribe((movies)=>{
      this.movies = movies;
      let index = this.movies.findIndex((movie: { id: string; }) =>movie.id== this.id);
      if(index > -1){
        this.movie= this.movies[index];
      }
    });
  }
displayVal='';
  getValue(val:any){
    console.warn(val)
    this.displayVal=val
  }

}
