import React from 'react'
import '../css/SignIn.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userAction'
import { withRouter } from 'react-router'
import { pageStatus } from '../actions/userAction'

const SignIn = ({ history}) => {

    const dispatch = useDispatch()

    const changeService = () => {
        dispatch(pageStatus('service'))
    }

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
            dispatch(login(res.data.token))

            history.push('/')
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
                <button className = 'sign-in-button' onClick = {() => {onSignIn(); changeService();}}>로그인</button>
            </div>
        </>
    )
}

export default withRouter(SignIn)