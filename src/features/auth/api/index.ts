import { appApi } from '@/shared/api'

import { IAuthResponse } from '../types'

interface IAuthArgs {
    email: string
    password: string
}

export const authApi = appApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<IAuthResponse, IAuthArgs>({
            query: () => ({
                method: 'POST',
                url: '/auth/login',
            }),
        }),
        logout: build.mutation<true, void>({
            query: () => ({
                method: 'POST',
                url: '/auth/logout',
            }),
        }),
        register: build.mutation<IAuthResponse, IAuthArgs>({
            query: () => ({
                method: 'POST',
                url: '/auth/register',
            }),
        }),
    }),
})

export const { useLogoutMutation, useLoginMutation, useRegisterMutation } = authApi
