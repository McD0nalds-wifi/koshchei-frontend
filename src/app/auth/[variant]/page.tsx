'use client'

import { Space, Typography } from 'antd'
import NextLink from 'next/link'
import { useParams } from 'next/navigation'

import { LoginForm, RegisterForm } from '@/features/auth'
import { routes } from '@/shared/routes'

import styles from './page.module.css'

const { Title, Link, Text } = Typography

export default function Auth() {
    const { variant } = useParams<{ variant: 'login' | 'register' }>()

    return (
        <div className={styles.wrapper}>
            <Space className={styles.form} direction='vertical' size='middle'>
                <Title level={2}>{variant === 'login' ? 'Вход' : 'Регистрация'}</Title>

                {variant === 'login' ? <LoginForm /> : <RegisterForm />}

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
        </div>
    )
}
