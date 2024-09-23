import { ReactNode } from 'react'

export const ScreenWidthLimiter = ({children, className=''}:{children:ReactNode, className?:string}) => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className={`w-full max-w-[1780px] ${className}`}>{children}</div>
    </div>
  )
}
