import React from 'react';
//redux
import { Provider } from "react-redux";
import store from "./store";
//routing
import {
  BrowserRouter as
  Router,
  Switch,
  Route
} from "react-router-dom";
//components
import NavTop from './components/NavTop';
import Intro from './components/Intro';
import LoadButton from './components/LoadButton';
import Footer from './components/Footer';


function App(props) {
  return (
  
  <Provider store={store}>
     <Router>
        <Route path="/" component={NavTop} />
        <Route path="/" component={Intro} />
        <Switch>
        <Route path="/feeds" component={LoadButton} />
        </Switch>
        <Route path="/" component={Footer} />
      </Router>
   </Provider>

  );
}

export default App;
