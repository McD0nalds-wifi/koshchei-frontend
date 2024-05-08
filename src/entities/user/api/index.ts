import { appApi } from '@/shared/api'

import { IUser } from '../types'

export const userApi = appApi.injectEndpoints({
    endpoints: (build) => ({
        getUser: build.query<IUser, void>({
            query: () => ({
                method: 'GET',
                url: '/user/profile',
            }),
        }),
    }),
})

export const { useGetUserQuery } = userApi
