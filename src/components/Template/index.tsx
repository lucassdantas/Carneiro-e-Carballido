import React, { ReactNode } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { FloatWppButton } from '@/components/FloatWppButton'

type TemplateProps = {
  children:ReactNode;
  pageTitle:string;
  floatingHeader:boolean;
}
export const Template = ({children, pageTitle, floatingHeader=false}:TemplateProps) => {
  return (
    <>
      <Header isFloatingHeader={floatingHeader}/>
      <main className='flex flex-col items-center'>{children}</main>
      <FloatWppButton/>
      <Footer/>
    </>
  )
}
