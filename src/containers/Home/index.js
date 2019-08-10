import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'
import styles from './style.css'
import withStyles from '../../withStyle'

class Home extends Component {
  // 服务端渲染阶段不执行该方法
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getHomeList()
    }
  }

  renderList() {
    const { list } = this.props;
    return list.map((item, index) => (
      <div className={styles.item} key={index}>
        <a href={item.link} target="_blank">{item.title}</a>
      </div>
    ))
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>cyc的ssr</title>
          <meta name="description" content="ssr的首页内容" />
        </Helmet>
        <div className={styles.container}>
          {this.renderList()} 
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  list: state.home.newsList
})

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList());
  }
})

const ExportHome = connect(mapStateToProps, mapDispatchToProps)(withStyles(Home, styles));

ExportHome.loadData = (store) => {
  return store.dispatch(getHomeList())
}
export default ExportHome;