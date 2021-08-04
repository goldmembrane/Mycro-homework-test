import React from 'react'
import '../css/SignIn.css'
import axios from 'axios'

const SignIn = () => {

    // 입력받은 값을 login api를 통해 서버롤 post요청을 전달하는 함수
    const onSignIn = () => {
        const sendEmail = document.querySelector('.sign-in-email-input')
        const sendPassword = document.querySelector('.sign-in-password-input')

        axios({
            method: "POST",
            url: 'https://mycroft-test-api.herokuapp.com/login',
            data: {
                "email": sendEmail.value,
                "password": sendPassword.value
            }
        }).then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log(error)
        })
    }
    return(
        <>
            <div className = 'sign-in-wrap'>
                <div className = 'sign-in-email-box'>
                    <span>이메일</span>
                    <input type = 'email' className = 'sign-in-email-input' />
                </div>
                <div className = 'sign-in-password-box'>
                    <span>비밀번호</span>
                    <input type = 'password' className = 'sign-in-password-input' />
                </div>
                <button className = 'sign-in-button' onClick = {onSignIn}>로그인</button>
            </div>
        </>
    )
}

export default SignIn