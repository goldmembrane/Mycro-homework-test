import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SignUp from './page/SignUp'
import Mypage from './page/Mypage'
import SignIn from './page/SignIn'
import Service from './page/Service'
import './css/Main.css'
import Auth from './hoc/auth'
import { useDispatch, useSelector } from 'react-redux'
import { login } from './actions/userAction'

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

    // 토큰을 가져오는 변수
    const authUser = useSelector(state => state.tokenReducer)

    // 토큰을 초기화시키는 함수
    const dispatch = useDispatch()

    const resetToken = () => {
        dispatch(login(""))
    }

    return(
        <Router>
            <header>
                <div className = 'logo-box'></div>
                <div className = 'menu-navigation-box'>
                    <ul className = 'menu-navigation'>
                        <Link to = '/' style = {{ textDecoration: 'none'}}><li className = {page === 'service' ? 'menu selected' : 'menu'} onClick = {changeService}>서비스</li></Link>
                        <Link to = '/sign-up' style = {{ textDecoration: 'none'}}><li className = {authUser.userToken === '' ? 'menu selected' : 'gone'} onClick = {changeSignUp}>회원가입</li></Link>
                        <Link to = '/mypage/order' style = {{ textDecoration: 'none'}}><li className = {authUser.userToken !== '' ? 'menu selected' : 'gone'}>마이페이지</li></Link>
                        <Link to = '/login' style = {{ textDecoration: 'none'}}><li className = {authUser.userToken === '' ? 'menu selected' : 'gone'} onClick = {changeLogin}>로그인</li></Link>
                        <Link to = '/' style = {{ textDecoration: 'none'}}>{authUser.userToken !== '' ? <li className = 'menu selected' onClick = {resetToken}>로그아웃</li> : null }</Link>
                    </ul>
                </div>
            </header>
            <div className = 'content-wrap'></div>
            <Switch>
                <Route exact path = '/' component = {Service} />
                <Route path = '/sign-up' component = {Auth(SignUp)} />
                <Route path = '/mypage/order' component = {Mypage} />
                <Route path = '/login' component = {Auth(SignIn)} />
                <Route path = {['/', 'logout']} component = {Service} />
            </Switch>
        </Router>
    )
}

export default App