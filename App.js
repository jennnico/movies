import React, { Component } from 'react';
import './App.css';
//Child component
import MovieCard from "./MovieCard";


//Variables needed to create urls.
var movieArray = []
var omdb = 'http://www.omdbapi.com/?t='
var key =  '&apikey=de322a1c'
//peliculas means movies, in Spanish
var peliculas = [
  'march+of+the+penguins',
  'the+martian',
  'a+league+of+their+own',
  'indiana+jones',
  'hidden+figures',
  'tremors',
  'moana',
  'maidentrip',
  'jurassic+park',
  'zootopia'
]

//combine website, movie title, and key to create url.
function newMovie(){
  for(var i=0; i<peliculas.length; i++){
    var film = peliculas[i];
    //store urls in movieArray
    movieArray.push(omdb + film + key);
}};

//call the function
newMovie()

class App extends Component {

constructor(){
    super();
    this.state = {
      //array to store objects retrieved from API
      movieInfo: [],
    };
  }


//Use APIs to fetch the information.
componentDidMount() {
  //loop through the array and fetch info for each URL
  for (var i = 0; i<=movieArray.length; i++){
    fetch(movieArray[i])
    //turn the response into json
    .then(response=>response.json())
    .then(response =>{
       //copy the movieInfo array, add the newest response, then setState
       let movieCopy = this.state.movieInfo.slice();
       movieCopy.push(response)
       this.setState({movieInfo: movieCopy});
       //console.log(this.state.movieInfo);
    })  
  .catch(error => console.log('parsing failed', error)) 
  }
}


//use MovieCard child component to render data
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MOVIE CARDS</h1>
        </header>
        {this.state.movieInfo.map((movie, index) => (
            <div>
              <MovieCard movie = {movie} key = {index}/>
            </div>
        )
        )}
      </div>
    );
  }
}

export default App;
