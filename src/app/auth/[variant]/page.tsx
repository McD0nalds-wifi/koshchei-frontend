import { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/shared/constants/seo'
import { AuthFormWrapper } from '@/widgets/auth-form-wrapper'

import styles from './page.module.css'

export const metadata: Metadata = {
    title: 'Авторизация',
    ...NO_INDEX_PAGE,
}

export default function Auth() {
    return (
        <div className={styles.wrapper}>
            <AuthFormWrapper />
        </div>
    )
}
