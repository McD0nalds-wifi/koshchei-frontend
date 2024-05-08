// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

import { IAuthResponse } from '@/features/auth'
import { getAccessToken } from '@/shared/utils/getAccessToken'
import { removeAccessTokenFromStorage } from '@/shared/utils/removeAccessTokenFromStorage'
import { saveAccessTokenStorage } from '@/shared/utils/saveAccessTokenStorage'

export interface IError {
    message: string
    statusCode: number
}

export const APP_REDUCER_PATH = 'app'

export const SERVER_API_URL = 'http://localhost:4001/api'

export const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions,
): Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>> => {
    const baseQuery = fetchBaseQuery({
        baseUrl: SERVER_API_URL,
        credentials: 'include',
        prepareHeaders: (headers) => {
            const accessToken = getAccessToken()

            if (accessToken) {
                headers.set('authorization', `Bearer ${accessToken}`)
            }

            return headers
        },
    })

    let result = await baseQuery(args, api, extraOptions || {})

    if (result.error && result.error.status === 401) {
        const refreshResult = (await baseQuery(
            {
                method: 'POST',
                url: '/auth/login/access-token',
            },
            api,
            {},
        )) as QueryReturnValue<IAuthResponse, FetchBaseQueryError, FetchBaseQueryMeta>

        if (refreshResult.data && refreshResult.data.accessToken) {
            saveAccessTokenStorage(refreshResult.data.accessToken)

            result = await baseQuery(args, api, extraOptions || {})
        } else {
            await baseQuery(
                {
                    method: 'POST',
                    url: '/auth/logout',
                },
                api,
                {},
            )

            removeAccessTokenFromStorage()
        }
    }

    return result
}

export const appApi = createApi({
    baseQuery: baseQuery,
    endpoints: () => ({}),
    reducerPath: APP_REDUCER_PATH,
    refetchOnMountOrArgChange: false,
})
