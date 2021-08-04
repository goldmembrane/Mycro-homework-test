import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SignUp from './page/SignUp'
import Mypage from './page/Mypage'
import SignIn from './page/SignIn'
import Service from './page/Service'
import './css/Main.css'
import Auth from './hoc/auth'
import { useDispatch, useSelector } from 'react-redux'
import { login, pageStatus } from './actions/userAction'

const App = () => {

    // 페이지 상태를 가져오는 변수
    const pageControl = useSelector(state => state.pageReducer)

    // 토큰을 가져오는 변수
    const authUser = useSelector(state => state.tokenReducer)

    const dispatch = useDispatch()

    // 토큰을 초기화시키는 함수
    const resetToken = () => {
        dispatch(login(""))
    }

    // 서비스 페이지로 액션을 바꾸는 함수
    const changeService = () => {
        dispatch(pageStatus('service'))
    }

    // 회원가입 페이지로 액션을 바꾸는 함수
    const changeSignUp = () => {
        dispatch(pageStatus('sign-up'))
    }

    // 로그인 페이지로 액션을 바꾸는 함수
    const changeLogin = () => {
        dispatch(pageStatus('login'))
    }

    // 마이페이지로 액션을 바꾸는 함수
    const changeMypage = () => {
        dispatch(pageStatus('mypage'))
    }

    return(
        <Router>
            <header>
                <div className = 'logo-box'></div>
                <div className = 'menu-navigation-box'>
                    <ul className = 'menu-navigation'>
                        <Link to = '/' style = {{ textDecoration: 'none'}}>
                            <li className = {pageControl.pageStatus === 'service' ? 
                            'menu selected' : 'menu'} 
                            onClick = {changeService}>
                                서비스
                            </li>
                        </Link>
                        <Link to = '/sign-up' style = {{ textDecoration: 'none'}}>
                            {authUser.userToken === '' ? 
                            <li className = {pageControl.pageStatus === 'sign-up' ? 
                            'menu selected': 'menu'} 
                            onClick = {changeSignUp}>
                                회원가입
                            </li> : null }
                        </Link>
                        <Link to = '/mypage/order' style = {{ textDecoration: 'none'}}>
                            {authUser.userToken !== '' ?
                            <li className = {pageControl.pageStatus === 'mypage' ? 
                            'menu selected': 'menu'} 
                            onClick = {changeMypage}>
                                마이페이지
                            </li> : null }
                        </Link>
                        <Link to = '/login' style = {{ textDecoration: 'none'}}>
                            {authUser.userToken === '' ? 
                            <li className = {pageControl.pageStatus === 'login' ? 
                            'menu selected': 'menu'} 
                            onClick = {changeLogin}>
                                로그인
                            </li> : null }
                        </Link>
                        <Link to = '/' style = {{ textDecoration: 'none'}}>
                            {authUser.userToken !== '' ? 
                            <li className = 'menu selected' 
                            onClick = {resetToken}>
                                로그아웃
                            </li> : null }
                        </Link>
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