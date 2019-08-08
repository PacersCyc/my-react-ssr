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
      promises.push(item.route.loadData(store));
    }
  })
  // console.log(promises)
  Promise.all(promises).then(() => {
    res.send(render(req, store))
  })
  // res.send(render(req, store))
});

var server = app.listen(3000);