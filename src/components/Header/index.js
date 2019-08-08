import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const Header = (props) => (
  <div>
    <div>
      <Link to="/">首页</Link><br/>
      {
        props.login ? (
          <Fragment>
            <Link to="/login">音乐</Link><br/>
            <Link to="/login">退出</Link>  
          </Fragment>
        ) : (
          <Link to="/login">登录</Link>
        )
      }   
    </div> 
  </div>
)

const mapStateToProps = (state) => ({
  login: state.header.login
})

export default connect(mapStateToProps)(Header)