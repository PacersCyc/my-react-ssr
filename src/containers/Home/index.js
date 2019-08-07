import React from 'react';
import Header from '../../components/Header';

const Home = () => (
  <div>
    <Header />
    <div>hello world</div>
    <button onClick={() => {
      alert('click')
    }}>click</button>  
  </div>
)

export default Home