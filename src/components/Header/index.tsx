import logo from '@/assets/logo-carneiro-e-carballido.png'
import { Button } from '@/components/Button'
import { pages, PageType } from '@/utils/constants/pages'
import { Link } from 'react-router-dom'
import { ScreenWidthLimiter } from '@/components/ScreenWidthLimiter'

export const Header = () => {
  return (
    <header className='-mb-24'>
      <ScreenWidthLimiter className='flex items-center'>
        <div className='flex flex-col justify-center w-1/6'>
          <img src={logo} alt='Logotipo' className='max-w-[250px]'/>
        </div>

        <div className='flex flex-col justify-center w-4/6'>
          <ul className='flex gap-4 items-center font-bold justify-center text-white'>
            {pages.map((page:PageType) => { if(page.showOnHeader) return <Link to={page.url}><li>{page.title}</li></Link>})}
          </ul>
        </div>

        <div className='flex flex-col justify-center items-end w-1/6'>
          <Button/>
        </div>
      </ScreenWidthLimiter>
      
    </header>
  )
}
