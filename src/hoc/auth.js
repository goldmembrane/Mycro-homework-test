import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function (Component, option) {

    const AuthCheck = (props) => {
        const userToken = useSelector(state => state.userToken)

        useEffect(() => {
            if ( !userToken ) {
                if (option) {
                    alert('로그인을 진행해 주세요')
                    props.history.push('/login')
                }
            }
        }, [])

        return <Component />
    }

    return AuthCheck
}