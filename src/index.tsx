import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const APIURL = 'https://api-mumbai.lens.dev/';

const apolloClient = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </StrictMode>,
  document.getElementById('app')
);
