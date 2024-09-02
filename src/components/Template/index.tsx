import React, { ReactNode } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { FloatWppButton } from '@/components/FloatWppButton'

type TemplateProps = {
  children:ReactNode;
  pageTitle:string;
}
export const Template = ({children, pageTitle}:TemplateProps) => {
  return (
    <>
      <Header/>
      <main>
        <section className='w-full bg-gray-500 text-center flex flex-col items-center justify-center text-bold text-white min-h-[250px]'>
          <h1>{pageTitle}</h1>
        </section>
        {children}
      </main>
      <FloatWppButton/>

      <Footer/>
    </>
  )
}
