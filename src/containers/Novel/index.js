import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getNovelList } from './store/actions'

class Novel extends Component {
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getNovelList()
    }
  }

  renderList() {
    const { list } = this.props;
    return list.map(item => (
      <div key={item.bid}>
        <h3>{item.bookname}</h3>
        <img src={item.book_cover}/>
      </div>
    ))
  }

  render() {
    if (this.props.login) {
      return (
        <div>
          {this.renderList()}
        </div>
      )
    } else {
      return <Redirect to="/"/>
    }
  }
}

Novel.loadData = (store) => {
  return store.dispatch(getNovelList())
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

export default connect(mapStateToProps, mapDispatchToProps)(Novel)