import React from 'react'
import '../css/SignUp.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { login } from '../actions/userAction'

const SignUp = ({ history }) => {

    // 이메일 체크 정규식
    const isEmail = () => {
        const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,4}$/i
        const email = document.querySelector('.sign-up-email-input')

        // 이메일 칸에 형식이 맞으면 true, 아니면 false를 반환한다.
        return emailRegExp.test(email.value)
    }
    
    // 비밀번호 체크 정규식
    const isPassword = () => {
        const passwordRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,15}$/
        const password = document.querySelector('.sign-up-password-input')
        
        // 비밀번호 칸에 8~15자이면 true, 아니면 false를 반환한다.
        return passwordRegExp.test(password.value)
    }
    
    // 입력한 비밀번호와 비밀번호 확인이 같은 지 검사하는 함수
    const checkValid = () => {

        // 이메일 체크 정규식
        const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,4}$/i
        // 이메일 입력 값 불러오기
        const email = document.querySelector('.sign-up-email-input')

        // 비밀번호 체크 정규식
        const passwordRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,15}$/
        // 비밀번호 입력 값 불러오기
        const password = document.querySelector('.sign-up-password-input')
        // 비밀번호 확인 입력 값 불러오기
        const samePassword = document.querySelector('.sign-up-same-password-input')

        // 이메일 유효성 여부가 false이면
        if ( !emailRegExp.test(email.value) ) {

            // 이메일 유효성을 검사하라는 alert를 띄운다.
            alert('check email validation!')

        // 비밀번호 유효성 여부가 false이면
        } else if ( !passwordRegExp.test(password.value) ) {

            // 비밀번호 유효성을 검사하라는 alert를 띄운다.
            alert('check password validation!')

        // 비밀번호와 확인 비밀번호가 같지 않다면
        } else if ( password.value !== samePassword.value ) {

            // 비밀번호 재확인을 검사하라는 alert를 띄운다.
            alert('check same password!')

        // 모든 유효성 검사를 통과했으면
        } else {

            // OK라는 alert를 띄운다.
            alert('OK!')

            // post요청을 보내는 함수를 실행한다.
            onSignUp()

            // 서비스 페이지로 돌아간다.
            history.push('/')
        }
    }

    const dispath = useDispatch()

    // 양식이 맞다면 서버에 POST요청을 보내는 함수
    const onSignUp = () => {
        const sendEmail = document.querySelector('.sign-up-email-input')
        const sendPassword = document.querySelector('.sign-up-password-input')
        const sendMobile = document.querySelector('.sign-up-tel-input')

        axios({
            method: 'POST',
            url: 'https://mycroft-test-api.herokuapp.com/sign-up',
            data: {
                "email": sendEmail.value,
                "password": sendPassword.value,
                "mobile": sendMobile.value
            }
        }).then((res) => {
            console.log(res)
            dispath(login(res.data.token))
        }).catch((error) => {
            console.log(error)
            throw new Error(error)
        })
    }

    return(
        <>
            <div className = 'sign-up-wrap'>
                <div className = 'sign-up-email-box'>
                    <span>이메일</span>
                    <input type = 'email' className = 'sign-up-email-input' onBlur = {isEmail}/>
                </div>
                <div className = 'sign-up-password-box'>
                    <span>비밀번호</span>
                    <input type = 'password' className = 'sign-up-password-input' onBlur = {isPassword} />
                </div>
                <div className = 'sign-up-check-password-box'>
                    <span>비밀번호 확인</span>
                    <input type = 'password' className = 'sign-up-same-password-input' />
                </div>
                <div className = 'sign-up-phone-number-box'>
                    <span>연락처</span>
                    <input type = 'tel' className = 'sign-up-tel-input' />
                </div>
                <button className = 'sign-up-button' onClick = {checkValid}>가입하기</button>
            </div>
        </>
    )
}

export default SignUp