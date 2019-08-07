import React from 'react'
import { renderToString } from 'react-dom/server'
import { Route, StaticRouter, matchPath } from 'react-router-dom';
import routes from '../Routes';
import { Provider } from 'react-redux'
import getStore from '../store'

export const render = (req) => {
  const store = getStore();

  const matchRoutes = []
  routes.some(route => {
    const match = matchPath(req.path, route);
    if (match) {
      matchRoutes.push(route)
    }
  })
  console.log(matchRoutes)

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