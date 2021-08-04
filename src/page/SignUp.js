import axios from 'axios'
import React, { useState } from 'react'
import '../css/SignUp.css'

const SignUp = ({ history }) => {

    // 이메일 state
    const [email, setEmail] = useState('')

    // 이메일 input에서 입력받은 값을 email state에 저장하는 함수
    const saveEmail = (e) => {

        setEmail(e.target.value)
    }

    // 이메일 체크 state
    const [checkEmail, setCheckEmail] = useState(false)

    // 이메일 체크 정규식
    const isEmail = (e) => {
        const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        
        // 이메일 칸에 형식이 맞으면 true, 아니면 false를 반환한다.
        setCheckEmail(emailRegExp.test(e.target.value))
    }
    
    // 비밀번호 유효성 체크 state
    const [validPassword, setValidPassword] = useState(false)
    
    // 비밀번호 체크 정규식
    const isPassword = (e) => {
        const passwordRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,15}$/
        
        // 비밀번호 칸에 8~15자이면 true, 아니면 false를 반환한다.
        setValidPassword(passwordRegExp.test(e.target.value))
    }
    
    // 비밀번호 state
    const [password, setPassword] = useState('')

    // 비밀번호 input에서 입력받은 값을 password state에 저장하는 함수
    const savePassword = (e) => {
        
        setPassword(e.target.value)
    }

    // 비밀번호 확인 state
    const [samePassword, setSamePassword] = useState('')

    // 비밀번호 확인 input에서 입력받은 값을 samePassword에 저장하는 함수
    const saveSamePassword = (e) => {

        setSamePassword(e.target.value)
    }

    // 전화번호 state
    const [mobile, setMobile] = useState('')

    // 전화번호 input에서 입력받은 값을 mobile state에 저장하는 함수
    const saveMobile = (e) => {

        setMobile(e.target.value)
    }

    // 입력한 비밀번호와 비밀번호 확인이 같은 지 검사하는 함수
    const checkValid = () => {
        // 이메일 유효성 여부가 false이면
        if ( !checkEmail ) {

            // 이메일 유효성을 검사하라는 alert를 띄운다.
            alert('check email validation!')

        // 비밀번호 유효성 여부가 false이면
        } else if ( !validPassword ) {

            // 비밀번호 유효성을 검사하라는 alert를 띄운다.
            alert('check password validation!')

        // 비밀번호와 확인 비밀번호가 같지 않다면
        } else if ( password !== samePassword ) {

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

    // 양식이 맞다면 서버에 POST요청을 보내는 함수
    const onSignUp = () => {
        const { sendEmail, sendPassword, sendMobile } = [email, password, mobile]

        console.log([sendEmail, sendPassword, sendMobile])

        axios({
            method: 'POST',
            url: 'https://mycroft-test-api.herokuapp.com/sign-up',
            data: {
                "email": sendEmail,
                "password": sendPassword,
                "mobile": sendMobile
            }
        }).then((res) => {
            console.log(res)
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
                    <input type = 'email' className = 'sign-up-email-input' onBlur = {(e) => { saveEmail(e); isEmail(e);}}/>
                </div>
                <div className = 'sign-up-password-box'>
                    <span>비밀번호</span>
                    <input type = 'password' className = 'sign-up-password-input' onBlur = {(e) => { savePassword(e); isPassword(e);}} />
                </div>
                <div className = 'sign-up-check-password-box'>
                    <span>비밀번호 확인</span>
                    <input type = 'password' className = 'sign-up-password-input' onBlur = {saveSamePassword}/>
                </div>
                <div className = 'sign-up-phone-number-box'>
                    <span>연락처</span>
                    <input type = 'tel' className = 'sign-up-tel-input' onBlur = {saveMobile}/>
                </div>
                <button className = 'sign-up-button' onClick = {checkValid}>가입하기</button>
            </div>
        </>
    )
}

export default SignUp