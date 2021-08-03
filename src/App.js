import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SignUp from './page/SignUp'
import Mypage from './page/Mypage'
import SignIn from './page/SignIn'
import Service from './page/Service'

const App = () => {
    return(
        <Router>
            <header>
                <div className = 'logo-box'>logo</div>
                <div className = 'menu-navigation-box'>
                    <ul className = 'menu-navigation'>
                        <li className = 'menu'><Link to = '/'>서비스</Link></li>
                        <li className = 'menu'><Link to = '/sign-up'>회원가입</Link></li>
                        <li className = 'menu'><Link to = '/login'>로그인</Link></li>
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