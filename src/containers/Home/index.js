import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'
import styles from './style.css'

class Home extends Component {
  componentWillMount() {
    if (this.props.staticContext) {
      this.props.staticContext.css.push(styles._getCss())
    }
  }

  // 服务端渲染阶段不执行该方法
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getHomeList()
    }
  }

  renderList() {
    const { list } = this.props;
    return list.map((item, index) => (
      <div className={styles.test} key={index}>
        <a href={item.link} target="_blank">{item.title}</a>
      </div>
    ))
  }

  render() {
    return (
      <div>
        {this.renderList()}
        <button onClick={() => {
          alert('click')
        }}>click</button>  
      </div>
    )
  }
}

Home.loadData = (store) => {
  return store.dispatch(getHomeList())
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