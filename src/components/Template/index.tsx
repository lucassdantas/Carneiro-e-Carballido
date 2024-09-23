import React, { ReactNode } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { FloatWppButton } from '@/components/FloatWppButton'
import { ScreenWidthLimiter } from '@/components/ScreenWidthLimiter'



type TemplateProps = {
  children:ReactNode;
  pageTitle:string;
}
export const Template = ({children, pageTitle}:TemplateProps) => {
  return (
    <>
      <Header/>
      <main>
        <ScreenWidthLimiter>
          {children}
        </ScreenWidthLimiter>
      </main>
      <FloatWppButton/>
      <Footer/>
    </>
  )
}
