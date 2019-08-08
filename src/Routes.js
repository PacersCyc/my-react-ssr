import React from 'react';
// import { Route } from 'react-router-dom';
import App from './App'
import Home from './containers/Home';
import Login from './containers/Login';

// export default (
//   <div>
//     <Route path="/" exact component={Home}></Route>
//     <Route path="/login" component={Login}></Route>
//   </div>
// )

export default [
  {
    path: '/',
    component: App,
    loadData: App.loadData,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        key: 'home',
        loadData: Home.loadData,
      },
      {
        path: '/login',
        component: Login,
        exact: true,
        key: 'login'
      }
    ]
  }
]