import { ScreenWidthLimiter } from '@/components/ScreenWidthLimiter'
import React, { ReactNode } from 'react'

type SectionProps = {
  children:ReactNode, 
  className?:string,
  bgImg?:string;
}
export const Section = ({children, className='', bgImg}:SectionProps) => {
  return (
  <section className={`${className}`} style={bgImg?{ backgroundImage: `url(${bgImg})` }:{}}>
    <ScreenWidthLimiter>{children}</ScreenWidthLimiter>
  </section>
  )
}
