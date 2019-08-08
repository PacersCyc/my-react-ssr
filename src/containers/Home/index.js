import React, { Component } from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'

class Home extends Component {
  // 服务端渲染阶段不执行该方法
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getHomeList(false)
    }
  }

  renderList() {
    const { list } = this.props;
    return list.map((item, index) => (
      <div key={index}>
        <a href={item.link} target="_blank">{item.title}</a>
      </div>
    ))
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderList()}
        <button onClick={() => {
          alert('click')
        }}>click</button>  
      </div>
    )
  }
}

Home.loadData = (store) => {
  return store.dispatch(getHomeList(true))
}

const mapStateToProps = state => ({
  list: state.home.newsList
})

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);