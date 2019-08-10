import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { actions } from './store'
import styles from './style.css'
import withStyles from '../../withStyle'

class Header extends Component {
  render() {
    const { login, handleLogin, handleLogout } = this.props
    return (
      <div className={styles.container}>
        <Link className={styles.item} to="/">首页</Link>
        {
          login ? (
            <Fragment>
              <Link className={styles.item} to="/novel">小说</Link>
              <button className={styles.item} onClick={handleLogout}>退出</button>  
            </Fragment>
          ) : (
            <button className={styles.item} onClick={handleLogin}>登录</button>
          )
        }   
      </div> 
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.header.login
})

const mapDispatchToProps = (dispatch) => ({
  handleLogin() {
    dispatch(actions.login())
  },
  handleLogout() {
    dispatch(actions.logout())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(Header, styles))