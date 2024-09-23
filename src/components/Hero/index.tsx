import React, { ReactNode } from 'react'




type HeroProps = {
  pageTitle:string;
}
export const Hero = ({ pageTitle}:HeroProps) => {
  return (
    <>
      <section className='w-full bg-gray-800 text-center pt-12 flex flex-col items-center justify-center text-bold text-white lg:min-h-[450px] bg-gradient-to-b from-blue-carneiro-e-carballido '>
          <h1 className='text-4xl font-bold'>{pageTitle}</h1>
        </section>
    </>
  )
}
