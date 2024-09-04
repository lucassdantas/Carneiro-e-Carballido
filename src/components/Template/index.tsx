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
        <section className='w-full bg-gray-800 text-center flex flex-col items-center justify-center text-bold text-white lg:min-h-[450px] bg-gradient-to-b from-blue-carneiro-e-carballido '>
          <span className='text-2xl font-bold'>{pageTitle}</span>
        </section>
        <ScreenWidthLimiter>
          {children}
        </ScreenWidthLimiter>
      </main>
      <FloatWppButton/>

      <Footer/>
    </>
  )
}
