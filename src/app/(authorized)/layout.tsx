import { ReactNode } from 'react'

import { HeaderWithSider } from '@/widgets/header-with-sider'

export default function AuthorizedLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return <HeaderWithSider>{children}</HeaderWithSider>
}
