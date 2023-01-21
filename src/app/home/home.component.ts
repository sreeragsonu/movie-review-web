import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  trendingMovies:any;

constructor(private http: HttpClient, private router:Router){}

  ngOnInit(): void{
    this.getTrendingMovies();
  }

  getTrendingMovies(){
this.http.get('http://localhost:4200/assets/data/popular.json').subscribe((movies)=>{
this.trendingMovies= movies;
console.log(this.trendingMovies);
})
  }

  goToMovie(type:String,id:String){
    this.router.navigate(['movie',type,id]);
  }

}
