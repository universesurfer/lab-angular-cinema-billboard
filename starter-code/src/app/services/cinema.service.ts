import { Injectable } from '@angular/core';

@Injectable()
export class Cinema {

  movies: Array<Object> = [
  {  id: 1,
    title: "Last of the Mohicans",
    poster: "https://images-na.ssl-images-amazon.com/images/I/51RTH8NJK0L.jpg",
    synopsis: "The Last of the Mohicans is an American Uchronic epic of 1992, of the adventures genre, based on the classic novel of the American writer James Fenimore Cooper.",
    genres: ["action", "history", "adventure"],
    year: 1992,
    director: "Michael Mann",
    actors: ["Daniel Day-Lewis", "Frank Madeleine Stowe"],
    hours: ["9am", "10am", "11am"],
    room: 1 },

    {  id: 2,
      title: "Saving Private Ryan",
      poster: "http://es.web.img3.acsta.net/pictures/14/03/05/09/42/163621.jpg",
      synopsis: "Saving Private Ryan is an American epic war movie released in 1998 and set in the Normandy invasion during World War II.",
      genres: ["action", "history", "adventure"],
      year: 1998,
      director: "Steven Spielberg",
      actors: ["Tom Hanks", "Vin Diesel"],
      hours: ["12pm", "1pm", "2pm"],
      room: 2 },

      {  id: 3,
        title: "Life is Beautiful",
        poster: "http://cdn.miramax.com/media/assets/759_LifeIsBeautiful_Catalog_Poster_v2_Approved.png",
        synopsis: "Life is Beautiful ( La vita è bella in Italian) is a 1997 filmwritten, directed and starring Roberto Benigni who plays Guido Orefice, an Italian Jew who owns a bookstore, who must use his fertile imagination to protect his Little son of the horrors of a Nazi concentration camp .",
        genres: ["drama", "history"],
        year: 1999,
        director: "Roberto Benigni",
        actors: ["Nicoletta Braschi", "Giorgio Cantarini"],
        hours: ["3pm", "4pm", "5pm"],
        room: 3 },

        {  id: 4,
          title: "The Dark Knight",
          poster: "https://s3.amazonaws.com/ppprod001/MediaImage/Media_12834.jpg",
          synopsis: "Superhero movie",
          genres: ["action", "adventure"],
          year: 2008,
          director: "Christopher Nolan",
          actors: ["Christian Bale", "Heath Ledger"],
          hours: ["6pm", "7pm", "8pm"],
          room: 4 },

          {  id: 5,
            title: "Star Wars: The Empire Strikes Back",
            poster: "https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg",
            synopsis: "The Empire Strikes Back (also known as Star Wars: Episode V – The Empire Strikes Back) is a 1980 American epic space opera film directed by Irvin Kershner",
            genres: ["action", "science fiction"],
            year: 1999,
            director: "Irvin Kershner",
            actors: ["Carrie Fisher", "Harrison Ford"],
            hours: ["9pm", "10pm", "11pm"],
            room: 5 }

  ];


    constructor() { }

    newMovie: Object = {};

    getMovies(): Array<Object> {
        console.log(this.movies);
        return this.movies;

    }
    //
    getMovie(id) {
        let newMovie;
      this.movies.forEach((movie) =>  {
        if (movie["id"] == id) {
          console.log(movie);
          return newMovie;
        }

      })
      return newMovie;
        // for (let i = 0; i < this.movies.length; i++) {
        //   if this.movies[i].id === (id)
        // }
}
}
