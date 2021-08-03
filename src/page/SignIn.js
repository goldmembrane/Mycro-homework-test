import React from 'react'

const SignIn = () => {
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
                <button className = 'sign-in-button'>로그인</button>
            </div>
        </>
    )
}

export default SignIn