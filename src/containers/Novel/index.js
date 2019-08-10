import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getNovelList } from './store/actions'
import styles from './style.css'
import withStyles from '../../withStyle'

class Novel extends Component {
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getNovelList()
    }
  }

  renderList() {
    const { list } = this.props;
    return list.map(item => (
      <div className={styles.item} key={item.bid}>
        <h3>{item.bookname}</h3>
        <img src={item.book_cover}/>
      </div>
    ))
  }

  render() {
    if (this.props.login) {
      return (
        <Fragment>
          <Helmet>
            <title>cyc的ssr---小说列表</title>
            <meta name="description" content="ssr的小说页内容" />
          </Helmet>
          <div className={styles.container}>
            {this.renderList()}
          </div>
        </Fragment>
      )
    } else {
      return <Redirect to="/"/>
    }
  }
}

const mapStateToProps = state => ({
  list: state.novel.novelList,
  login: state.header.login
})

const mapDispatchToProps = dispatch => ({
  getNovelList() {
    dispatch(getNovelList())
  }
})


const ExportNovel = connect(mapStateToProps, mapDispatchToProps)(withStyles(Novel, styles));

ExportNovel.loadData = (store) => {
  return store.dispatch(getNovelList())
}

export default ExportNovel