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
        <section className='w-full bg-gray-800 text-center pt-12 flex flex-col items-center justify-center text-bold text-white lg:min-h-[450px] bg-gradient-to-b from-blue-carneiro-e-carballido '>
          <h1 className='text-4xl font-bold'>{pageTitle}</h1>
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
