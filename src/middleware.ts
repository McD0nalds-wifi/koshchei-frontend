import { NextRequest, NextResponse } from 'next/server'

import { routes } from '@/shared/routes'
import { EnumTokens } from '@/shared/types'

export async function middleware(request: NextRequest) {
    const { url, cookies } = request

    const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

    const isAuthPage = url.includes('/auth')

    if (isAuthPage && refreshToken) {
        return NextResponse.redirect(new URL(routes.tasks.getRoute(), url))
    }

    if (isAuthPage) {
        return NextResponse.next()
    }

    if (!refreshToken) {
        return NextResponse.redirect(new URL(routes.login.getRoute(), url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!_next|api/auth).*)(.+)'],
}
