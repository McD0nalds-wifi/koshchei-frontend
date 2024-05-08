import { configureStore } from '@reduxjs/toolkit'

import { APP_REDUCER_PATH, appApi } from '@/shared/api'

export const makeStore = () => {
    return configureStore({
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(appApi.middleware),
        reducer: {
            [APP_REDUCER_PATH]: appApi.reducer,
        },
    })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
