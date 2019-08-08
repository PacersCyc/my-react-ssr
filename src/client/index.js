import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { getClientStore } from '../store'

import routes from '../Routes'

const store = getClientStore()

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.hydrate(<App />, document.getElementById('root'));