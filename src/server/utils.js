import React from 'react'
import { renderToString } from 'react-dom/server'
import { renderRoutes } from 'react-router-config'
import { Route, StaticRouter, matchPath } from 'react-router-dom';
import routes from '../Routes';
import { Provider } from 'react-redux'
import { Helmet } from 'react-helmet'

export const render = (req, store, context) => {
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider> 
  ))
  const helmet = Helmet.renderStatic()
  const cssStr = context.css.length ? context.css.join('\n') : '';

  return `
    <html>
      <head>
        <title>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
        </title>
        <style>${cssStr}</style>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
  `
}