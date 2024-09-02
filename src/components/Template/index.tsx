import React, { ReactNode } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

type TemplateProps = {
  children:ReactNode
}
export const Template = ({children}:TemplateProps) => {
  return (
    <>
      <Header/>
      <main>
      {children}
      </main>
      <Footer/>
    </>
  )
}
