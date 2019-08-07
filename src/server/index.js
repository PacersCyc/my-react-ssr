import express from 'express'
import { matchRoutes } from 'react-router-config'
import { render } from './utils'
import routes from '../Routes';
import { getStore}  from '../store'

const app = express();

app.use(express.static('public'))

app.get('*', function(req, res) {
  const store = getStore();
  // 根据路由获取对应路由组件的loadData方法，执行后获取数据并传入store
  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = []
  matchedRoutes.forEach(item => {
    if(item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  })
  Promise.all(promises).then(() => {
    res.send(render(req, store))
  })
  // render(req, res);
});

var server = app.listen(3000);