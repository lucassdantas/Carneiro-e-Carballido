import { Button } from '@/components/Button'
import { Template } from '@/components/Template'
import { SuperTitle } from '@/components/Titles/SuperTitle'
import React from 'react'

export const About = () => {
  return (
    <Template pageTitle='Sobre'>
      <section className='flex py-12 items-center gap-12'>
        <div className="flex flex-col w-1/2 items-center">
          <div className="bg-gray-700 h-[450px] w-full rounded-xl"></div>
        </div>
        <div className="flex flex-col w-1/2 items-start">
          <SuperTitle content='Sobre nós' className='mb-2'/>
          <h2 className='text-4xl mb-4'>Nós somos a Carneiro & Carbalido</h2>
          <p className='mb-4'>Transformamos a contabilidade em uma vantagem estratégica</p>
          <img src={''} alt='Imagem carneiro e carballido'/>
          <Button/>
        </div>
      </section>
      <section className='flex py-12 items-center gap-12'>
        <div className="flex flex-col w-1/2 items-center">
          <div className="bg-gray-700 h-[450px] w-full rounded-xl"></div>
        </div>
        <div className="flex flex-col w-1/2 items-start">
          <SuperTitle content='Sobre nós' className='mb-2'/>
          <h2 className='text-4xl mb-4'>Nós somos a Carneiro & Carbalido</h2>
          <p className='mb-4'>Transformamos a contabilidade em uma vantagem estratégica</p>
          <img src={''} alt='Imagem carneiro e carballido'/>
          <Button/>
        </div>
      </section>
    </Template>
  )
}
