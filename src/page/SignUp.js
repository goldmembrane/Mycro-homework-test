import React, { useState } from 'react'

const SignUp = () => {

    // 이메일 체크 정규식
    const isEmail = (e) => {
        const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        
        // 이메일 칸에 형식이 맞으면 true, 아니면 false를 반환한다.
        return emailRegExp.test(e.target.value)
    }

    // 비밀번호 체크 정규식
    const isPassword = (e) => {
        const passwordRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,15}$/

        // 비밀번호 칸에 8~15자이면 true, 아니면 false를 반환한다.
        return passwordRegExp.test(e.target.value)
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

    // 입력한 비밀번호와 비밀번호 확인이 같은 지 검사하는 함수
    const checkSamePassword = () => {
        if ( password === samePassword ) {
            alert('OK!')
        }else {
            alert('please check same password!')
        }
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
                    <input type = 'password' className = 'sign-up-password-input' onBlur = {(e) => { savePassword(e); isPassword(e);}} />
                </div>
                <div className = 'sign-up-check-password-box'>
                    <span>비밀번호 확인</span>
                    <input type = 'password' className = 'sign-up-password-input' onBlur = {saveSamePassword}/>
                </div>
                <div className = 'sign-up-phone-number-box'>
                    <span>연락처</span>
                    <input type = 'tel' className = 'sign-up-tel-input'/>
                </div>
                <button className = 'sign-up-button' onClick = {checkSamePassword}>가입하기</button>
            </div>
        </>
    )
}

export default SignUp