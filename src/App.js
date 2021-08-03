import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SignUp from './page/SignUp'
import Mypage from './page/Mypage'
import SignIn from './page/SignIn'
import Service from './page/Service'
import './css/Main.css'

const App = () => {

    // 현재 페이지를 나타내는 state
    const [page, setPage] = useState('service')

    // 서비스 상태로 바꾸는 함수
    const changeService = () => {
        setPage('service')
    }

    // 회원가입 상태로 바꾸는 함수
    const changeSignUp = () => {
        setPage('signup')
    }

    // 로그인 상태로 바꾸는 함수
    const changeLogin = () => {
        setPage('login')
    }

    return(
        <Router>
            <header>
                <div className = 'logo-box'></div>
                <div className = 'menu-navigation-box'>
                    <ul className = 'menu-navigation'>
                        <Link to = '/' style = {{ textDecoration: 'none'}}><li className = {page === 'service' ? 'menu selected' : 'menu'} onClick = {changeService}>서비스</li></Link>
                        <Link to = '/sign-up' style = {{ textDecoration: 'none'}}><li className = {page === 'signup' ? 'menu selected' : 'menu'} onClick = {changeSignUp}>회원가입</li></Link>
                        <Link to = '/login' style = {{ textDecoration: 'none'}}><li className = {page === 'login' ? 'menu selected' : 'menu'} onClick = {changeLogin}>로그인</li></Link>
                    </ul>
                </div>
            </header>
            <div className = 'content-wrap'></div>
            <Switch>
                <Route exact path = '/' component = {Service} />
                <Route path = '/sign-up' component = {SignUp} />
                <Route path = '/mypage/order' component = {Mypage} />
                <Route path = '/login' component = {SignIn} />
                <Route path = {['/', 'logout']} component = {Service} />
            </Switch>
        </Router>
    )
}

export default App