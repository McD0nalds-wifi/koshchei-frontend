export const routes = {
    login: {
        getRoute: () => '/auth/login',
    },
    register: {
        getRoute: () => '/auth/register',
    },
    tasks: {
        getRoute: () => '/tasks',
    },
} as const
