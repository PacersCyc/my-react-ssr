import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { actions } from './store'

class Header extends Component {
  render() {
    const { login, handleLogin, handleLogout } = this.props
    return (
      <div>
        <div>
          <Link to="/">首页</Link><br/>
          {
            login ? (
              <Fragment>
                <Link to="/login">音乐</Link><br/>
                <button onClick={handleLogout}>退出</button>  
              </Fragment>
            ) : (
              <button onClick={handleLogin}>登录</button>
            )
          }   
        </div> 
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)