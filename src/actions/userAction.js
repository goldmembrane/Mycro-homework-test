import { AUTH_USER } from "./type"

export const login = (token) => {
    return {
        type: AUTH_USER,
        userToken: token
    }
}