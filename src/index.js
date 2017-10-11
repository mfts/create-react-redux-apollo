import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import store from './store'
import client from './apollo'

import './assets/css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


render(
  <ApolloProvider client={client} store={store}>
  	<BrowserRouter>
	    <App />
	  </BrowserRouter>
  </ApolloProvider>, 
  document.getElementById('root')
);
registerServiceWorker();