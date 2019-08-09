import express from 'express'
import proxy from 'express-http-proxy'
import { matchRoutes } from 'react-router-config'
import { render } from './utils'
import routes from '../Routes';
import { getStore}  from '../store'

const app = express();

app.use(express.static('public'))

app.use('/api', proxy('https://www.apiopen.top', {
  proxyReqPathResolver: function (req) {
    console.log(req.url + '------')
    // return '/journalismApi'
    return req.url
  }
}));

app.get('*', function(req, res) {
  const store = getStore(req);
  // 根据路由获取对应路由组件的loadData方法，执行后获取数据并传入store
  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = []
  matchedRoutes.forEach(item => {
    if(item.route.loadData) {
      // 封装一层promise，无论请求失败成功均resolve下一层
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve).catch(resolve)
      })
      promises.push(promise);
    }
  })
  // console.log(promises)
  Promise.all(promises).then(() => {
    const context = {
      css: []
    }
    const html = render(req, store, context)
    console.log(context)
    if(context.action === 'REPLACE') {
      res.redirect(301, context.url)
    }else if (context.notFound) {
      res.status(404)
      res.send(html)
    } else {
      res.send(html)
    }    
  }).catch(err => {
    // res.send('sorry, request error!')
  })
});

var server = app.listen(3000);