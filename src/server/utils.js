import React from 'react'
import { renderToString } from 'react-dom/server'
import { Route, StaticRouter, matchPath } from 'react-router-dom';
import routes from '../Routes';
import { Provider } from 'react-redux'

export const render = (req, store) => {
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {routes.map(route => (
          <Route {...route}/>
        ))}
      </StaticRouter>
    </Provider> 
  ))

  return `
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `
}