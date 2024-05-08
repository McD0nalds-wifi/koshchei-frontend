import Cookies from 'js-cookie'

import { EnumTokens } from '@/shared/types'

export const removeAccessTokenFromStorage = () => {
    Cookies.remove(EnumTokens.ACCESS_TOKEN)
}
