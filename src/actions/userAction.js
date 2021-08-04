import { AUTH_USER, PAGE_CONTROL} from "./type"

export const login = (token) => {
    return {
        type: AUTH_USER,
        userToken: token
    }
}

export const pageStatus = (status) => {
    return {
        type: PAGE_CONTROL,
        pageStatus: status
    }
} 