import logo from '@/assets/_img/logo.jpg'
import { Button } from '@/components/Button'
import { pages, PageType } from '@/utils/constants/pages'
import { Link } from 'react-router-dom'
import { SuperHeader } from '@/components/Header/SuperHeader'
import { Section } from '@/components/Section'

export const DesktopHeader = () => {
  return (
    <header className='flex flex-col gap-5 bg-white relative pb-5'>
      <SuperHeader/>
      <Section >
        <div className="flex items-center">
          <div className='flex flex-col justify-center w-2/6'>
            <Link to='/'>
              <img src={logo} alt='Logotipo' className='max-w-[280px]'/>
            </Link>
          </div>

          <div className='flex flex-col justify-center w-4/6'>
            <ul className='flex gap-4 items-center font-medium justify-center'>
              {pages.map((page:PageType) => { if(page.showOnHeader) return <Link to={page.url} key={page.url}><li>{page.title}</li></Link>})}
            </ul>
          </div>

          <div className='flex flex-col justify-center items-end w-1/6'>
            <Button/>
          </div>
        </div>
      </Section>
    </header>
  )
}
