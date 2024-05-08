'use client'

import { ReactNode } from 'react'

import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    return (
        <>
            {children}

            <ToastContainer theme='colored' />
        </>
    )
}
