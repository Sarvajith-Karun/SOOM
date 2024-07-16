import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "SOOM - A Zoom Clone",
  description: "Welcome to SOOM, a Zoom clone!",
  icons: {
    icon: '/icons/logo.svg'
  }
};

const RootLayout = ({ children }: { children: ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
        { children }
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout