import { userApi } from '@/entities/user'
import { appApi } from '@/shared/api'
import { saveAccessTokenStorage } from '@/shared/utils/saveAccessTokenStorage'

import { IAuthResponse } from '../types'

interface IAuthArgs {
    email: string
    password: string
}

export const authApi = appApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<IAuthResponse, IAuthArgs>({
            onQueryStarted: async (instrumentId, { dispatch, queryFulfilled }) => {
                const { data } = await queryFulfilled

                saveAccessTokenStorage(data.accessToken)
                dispatch(userApi.util.upsertQueryData('getUser', undefined, data.user))
            },
            query: (args) => ({
                body: args,
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
            onQueryStarted: async (instrumentId, { dispatch, queryFulfilled }) => {
                const { data } = await queryFulfilled

                saveAccessTokenStorage(data.accessToken)
                dispatch(userApi.util.upsertQueryData('getUser', undefined, data.user))
            },
            query: (args) => ({
                body: args,
                method: 'POST',
                url: '/auth/register',
            }),
        }),
    }),
})

export const { useLogoutMutation, useLoginMutation, useRegisterMutation } = authApi
