import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import getStore from '../store'

import routes from '../Routes'

const App = () => {
  return (
    <Provider store={getStore()}>
      <BrowserRouter>
        {routes.map(route => (
          <Route {...route}/>
        ))}
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.hydrate(<App />, document.getElementById('root'));