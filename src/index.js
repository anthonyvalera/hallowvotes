import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Global } from '@emotion/core'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import QuestionsProvider from './context/QuestionsProvider';

import TV from './pages/TV';
import Home from './pages/Home';
import globalStyles from './globalStyles';
import Questions from './pages/Questions';
import Question from './pages/Question';

const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/ckgw10wo1gpzf01z6b879ef3a/master',
  cache: new InMemoryCache()
});

const root = document.getElementById('root');

const App = () => {
  return (
    <ApolloProvider client={client}>
      <QuestionsProvider>
        <Router>
          <>
            <Switch>
              <Route path="/question/:id">
                <Question />
              </Route>
              <Route path="/questions">
                <Questions />
              </Route>
              <Route path="/tv">
                <TV />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </>
        </Router>
        <Global styles={globalStyles} />
      </QuestionsProvider>
    </ApolloProvider>
  );
};

render(<App />, root);
