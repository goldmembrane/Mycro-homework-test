import React from 'react'
import Service from './page/Service'
import SignUp from './page/SignUp'
import SignIn from './page/SignIn'

const App = () => {
    return(
        <>
            <header>
                <div className = 'logo-box'>logo</div>
                <div className = 'menu-navigation-box'>
                    <ul className = 'menu-navigation'>
                        <li className = 'menu'>서비스</li>
                        <li className = 'menu'>회원가입</li>
                        <li className = 'menu'>로그인</li>
                    </ul>
                </div>
            </header>
            <div className = 'content-wrap'>
                <Service />
                <SignUp />
                <SignIn />
            </div>
        </>
    )
}

export default App