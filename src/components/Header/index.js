import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { actions } from './store'
import styles from './style.css'

class Header extends Component {
  componentWillMount() {
    console.log(this.props.staticContext)
    if (this.props.staticContext) {
      this.props.staticContext.css.push(styles._getCss())
    }
  }

  render() {
    const { login, handleLogin, handleLogout } = this.props
    return (
      <div>
        <div className={styles.test}>
          <Link to="/">首页</Link><br/>
          {
            login ? (
              <Fragment>
                <Link to="/novel">小说</Link><br/>
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