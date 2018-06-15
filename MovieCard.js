import React, { Component } from 'react';
import './App.css';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


//let Grid = ReactBootstrap.Grid;
//let Row = ReactBootstrap.Row;
//let Col = ReactBootstrap.Col;

//console.log(this.props.releaseDate);

class MovieCard extends Component{
	render(){
		return(
			<div>
			<div id="card">
			<h2 id="movieTitle">{this.props.title}</h2>

			<Grid>
              <Row  className="show-grid">
                <Col md={6} mdPush={6}>

              <img src = {this.props.image} alt="" />

                </Col>
  
                <Col md={6} mdPull={6}>


			  <ul id="movieInfo">
               <li className="item">Released <p id="released">{this.props.releaseDate}</p></li>
               
               <hr></hr>
               <li className="item">Rated <p id="rated"></p></li>
               <hr></hr>
               <li className="item">Genre <p id="genre"></p></li>
               <hr></hr>
               <li className="item">Website <p id="website"></p></li>
               <hr></hr>
               <li className="item">Awards <p id="awards"></p></li>
               <hr></hr>
               <li className="item">Ratings <p id="ratings"></p></li>
			  </ul>

			      </Col>       
             </Row>
             </Grid>
		
			</div>
			</div>
		);
	}
}

export default MovieCard;