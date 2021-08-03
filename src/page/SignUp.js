import React from 'react'

const SignUp = () => {
    return(
        <>
            <div className = 'sign-up-wrap'>
                <div className = 'email-box'>
                    <span>이메일</span>
                    <input type = 'email' className = 'email-input' />
                </div>
                <div className = 'password-box'>
                    <span>비밀번호</span>
                    <input type = 'password' className = 'password-input'/>
                </div>
                <div className = 'check-password-box'>
                    <span>비밀번호 확인</span>
                    <input type = 'password' className = 'password-input'/>
                </div>
                <div className = 'phone-number-box'>
                    <span>연락처</span>
                    <input type = 'tel' className = 'tel-input'/>
                </div>
                <button className = 'sign-up-button'>가입하기</button>
            </div>
        </>
    )
}

export default SignUp