import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Header from './components/Header';
import AllMoviesFetch from './components/Movies/AllMoviesFetch';
import SingleMovieFetch from "./components/Movies/SingleMovieFetch";
// import AllMovies from './components/Movies/AllMovies';
// import SingleMovie from './components/Movies/SingleMovie';
import Registration from "./components/Registration";
import SliderImages from './components/Home/SliderImages';
import CardSlider from './components/Home/CardSlider';
import Premiers from './components/Home/Premiers'
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/movies">
            <AllMoviesFetch />
          </Route>
          <Route exact path="/movies/:movid">
            <SingleMovieFetch />
          </Route>
          <Route exact path="/register">
            <Registration />
          </Route>
          <Route exact path="/">
            <SliderImages/>
            <CardSlider/>
            <Premiers/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
