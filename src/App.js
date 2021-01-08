import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './styles/glabal';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header color="white" />
        <Switch>
          <Router path="/"></Router>
        </Switch>
      </Router>
    </>
  );
};

export default App;
