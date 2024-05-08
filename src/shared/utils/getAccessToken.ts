import Cookies from 'js-cookie'

import { EnumTokens } from '@/shared/types'

export const getAccessToken = () => {
    const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)

    return accessToken || null
}
