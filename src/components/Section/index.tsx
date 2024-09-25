import { ScreenWidthLimiter } from '@/components/ScreenWidthLimiter'
import { ReactNode } from 'react'

type SectionProps = {
  children:ReactNode, 
  className?:string,
  bgImg?:string,
  limiterClassName?:string,
}
export const Section = ({children, className='', limiterClassName='', bgImg}:SectionProps) => {
  return (
  <section className={`w-full ${className}`} style={bgImg?{ backgroundImage: `url(${bgImg})` }:{}}>
    <ScreenWidthLimiter className={`px-4 ${limiterClassName}`}>{children}</ScreenWidthLimiter>
  </section>
  )
}
