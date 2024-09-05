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
          <h2 className='text-4xl mb-4'>Simplifique suas finanças com profissionais especializados</h2>
          <p className='mb-4'>Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, fugit ullam aliquid enim facilis odio obcaecati quasi dolorum commodi! Quo veniam eaque excepturi et placeat nihil? Sit commodi suscipit officiis!</p>
          <Button/>
        </div>
      </section>
    </Template>
  )
}
