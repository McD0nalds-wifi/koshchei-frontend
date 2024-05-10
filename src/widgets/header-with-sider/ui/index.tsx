'use client'
import { ReactNode } from 'react'

import { BarsOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'

import styles from './index.module.css'

const { Header, Content, Footer, Sider } = Layout

const ITEMS = {
    tasks: { icon: <BarsOutlined />, key: 'tasks', label: 'Задачи' },
}

const ITEMS_LIST = [ITEMS.tasks]

export const HeaderWithSider = ({ children }: { children: ReactNode }) => {
    return (
        <Layout style={{ height: '100vh' }}>
            <Sider breakpoint='lg' collapsedWidth='0'>
                <div className={styles.menu} />

                <Menu defaultSelectedKeys={[ITEMS.tasks.key]} items={ITEMS_LIST} mode='inline' theme='dark' />
            </Sider>

            <Layout>
                <Header className={styles.header} />

                <Content className={styles.content}>
                    <div className={styles.container}>{children}</div>
                </Content>

                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    )
}
