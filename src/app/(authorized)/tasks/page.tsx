import { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/shared/constants/seo'

export const metadata: Metadata = {
    title: 'Задачи',
    ...NO_INDEX_PAGE,
}

export default function Auth() {
    return <div>Tasks</div>
}
