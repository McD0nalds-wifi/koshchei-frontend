import { ReactNode } from 'react'

import { AntdRegistry } from '@ant-design/nextjs-registry'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { SITE_NAME } from '@/shared/constants/seo'
import { StoreProvider } from '@/shared/providers/StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    description: '',
    title: {
        default: SITE_NAME,
        template: `$s | ${SITE_NAME}`,
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <AntdRegistry>
                    <StoreProvider>{children}</StoreProvider>
                </AntdRegistry>
            </body>
        </html>
    )
}
