import React, { Component } from 'react';
import './App.css';
import $ from "jquery";
import _ from 'lodash';

import MovieCard from "./MovieCard";

//variables needed to create urls.
var urlArray = []
var omdb = 'http://www.omdbapi.com/?t='
var key =  '&apikey=de322a1c'
var movieArray = [
  'back+to+the+future',
  'indiana+jones',
  'up',
  'ghostbusters',
]
var releaseDate


class App extends Component {

  constructor(){
    super();
    this.state = {};
  }


///

//newMovie()


//function newMovie(){
newMovie = () => {
//turn website, movie title, and key into url.
//created array of those urls.
for(var i=0; i<movieArray.length; i++){
  var film = movieArray[i];
  urlArray.push(omdb + film + key);
  //console.log(urlArray);
}

for (var j=0; j<=urlArray.length; j++){
     
  $.ajax({
    //url: urlString,
    url: urlArray[j],
    type: "GET",
    crossDomain: true,
    success: function (result) {
      //var rating = result.Ratings;
      //console.log(rating);
      //$("#movieTitle").text(result.Title);
      var releaseDate = result.Released
      $("#released").text(result.Released);
      $("#rated").text(result.Rated);
      $("#genre").text(result.Genre);
      $("#website").text(result.Website);
      $("#awards").text(result.Awards);
      //$("#ratings").text(Object.entries(rating));
      this.setState({
        title: result.Title
      })
    }
  });
 }
}
///


  render() {
    var pelicula = _.map(this.state.title, (movie) => {
      return <li>{movie.title}</li>;
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MOVIE CARDS</h1>
           <ul>{pelicula}</ul>
        </header>

        <MovieCard title="Back to the Future" image = 'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg' getMovie={this.newMovie}/>
        <MovieCard title="Indiana Jones" image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJgizEh-6Ggx8OI5L434BTvrBvJbVC243PxaiIXz1HJ7mGxxlJg' getMovie={this.newMovie}/>
        <MovieCard title="Up" image = 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Up_%282009_film%29.jpg/220px-Up_%282009_film%29.jpg' getMovie={this.newMovie}/>
        <MovieCard title="Ghostbusters" image = 'https://resizing.flixster.com/INKCtDRIQXX3GjXTcVGJ1zBdBR0=/206x305/v1.bTsxMjAxNjcxNTtqOzE3NzM0OzEyMDA7MTUzNjsyMDQ4' getMovie={this.newMovie}/>
      </div>
    );
  }
}

export default App;
