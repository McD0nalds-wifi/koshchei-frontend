import Cookies from 'js-cookie'

import { EnumTokens } from '@/shared/types'

export const saveAccessTokenStorage = (accessToken: string) => {
    Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
        domain: 'localhost',
        expires: 1,
        sameSite: 'strict',
    })
}
