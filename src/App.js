import React from 'react'
import './App.css'
import MovieList from './Components/MovieList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <>
    <MovieList/>
    <Link></Link>
    <Route path="/" component={MovieList}/>
  </>
  </Router>
  );
}

export default App;
