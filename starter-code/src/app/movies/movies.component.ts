import { Component, OnInit } from '@angular/core';
import { Cinema } from "../services/cinema.service";
// import { Injectable } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

    moviesArray: Array<Object>;
    movieId: number;
    movie: Object;

  constructor(public cinema: Cinema, private route: ActivatedRoute) {
    this.moviesArray = this.cinema.getMovies();
    this.route.params.subscribe((params) => this.movieId = +params['id']);
    this.movie = this.cinema.getMovie(this.movieId);
  }

  ngOnInit() {

}


}
