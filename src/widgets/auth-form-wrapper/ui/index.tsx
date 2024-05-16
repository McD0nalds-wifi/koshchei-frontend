'use client'
import { Space, Typography } from 'antd'
import { isArray } from 'lodash'
import NextLink from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

import { IRegisterForm, LoginForm, RegisterForm, useLoginMutation, useRegisterMutation } from '@/features/auth'
import { isApiRequestErrorResponse } from '@/shared/api'
import { routes } from '@/shared/routes'

import styles from './index.module.css'

const { Title, Link, Text } = Typography

export const AuthFormWrapper = () => {
    const { variant } = useParams<{ variant: 'login' | 'register' }>()
    const { replace } = useRouter()

    const [register, { isLoading: registerLoading }] = useRegisterMutation()
    const [login, { isLoading: loginLoading }] = useLoginMutation()

    const handleFormSubmit = async ({ email, password }: IRegisterForm) => {
        if (!email || !password) {
            toast('Пароль или E-mail указан неверно', {
                autoClose: 2000,
                hideProgressBar: true,
                position: 'top-center',
                type: 'error',
            })
            return
        }

        try {
            // TODO
            variant === 'login'
                ? await login({ email, password }).unwrap()
                : await register({ email, password }).unwrap()

            replace(routes.tasks.getRoute())
        } catch (error) {
            if (isApiRequestErrorResponse(error)) {
                toast(isArray(error.data.message) ? error.data.message[0] : error.data.message, {
                    autoClose: 2000,
                    hideProgressBar: true,
                    position: 'top-center',
                    type: 'error',
                })
            }
        }
    }

    return (
        <Space className={styles.wrapper} direction='vertical' size='middle'>
            <Title level={2}>{variant === 'login' ? 'Вход' : 'Регистрация'}</Title>

            {variant === 'login' ? (
                <LoginForm loading={loginLoading} onSubmit={handleFormSubmit} />
            ) : (
                <RegisterForm loading={registerLoading} onSubmit={handleFormSubmit} />
            )}

            <div style={{ textAlign: 'center' }}>
                {variant === 'login' ? (
                    <>
                        <Text>Нет аккаунта?</Text>{' '}
                        <NextLink href={routes.register.getRoute()} legacyBehavior passHref>
                            <Link>Зарегистрироваться</Link>
                        </NextLink>
                    </>
                ) : (
                    <>
                        <Text>Уже есть аккаунт?</Text>{' '}
                        <NextLink href={routes.login.getRoute()} legacyBehavior passHref>
                            <Link>Войти</Link>
                        </NextLink>
                    </>
                )}
            </div>
        </Space>
    )
}
