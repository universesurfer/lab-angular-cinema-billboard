import { Component, OnInit } from '@angular/core';
import { Routes } from "@angular/router";
import { Cinema } from "../services/cinema.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Array<Object>;

  constructor(public cinema: Cinema) { }

  ngOnInit() {
    this.movies = this.cinema.getMovies();
  }

}
