import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './styles/glabal';
import Header from './components/Header/Header';
import Home from './pages/index';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header color="white" />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
