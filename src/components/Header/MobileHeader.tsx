import logo from '@/assets/logo-carneiro-e-carballido.png';
import { Button } from '@/components/Button';
import { pages, PageType } from '@/utils/constants/pages';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=' relative z-10 bg-primary p-4 text-white'>
      <div className='flex justify-between items-center'>
        <Link to='/'>
          <img src={logo} alt='Logotipo' className='h-8'/>
        </Link>
        <button onClick={toggleMenu} className='text-blue-carneiro-e-carballido'>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className='mt-4'>
          <ul className='flex flex-col gap-4 items-center text-black py-8'>
            {pages.map((page: PageType) => {
              if (page.showOnHeader) {
                return (
                  <li key={page.url} onClick={toggleMenu}>
                    <Link to={page.url}>{page.title}</Link>
                  </li>
                );
              }
              return null;
            })}
          </ul>
          <div className='mt-4 flex justify-center'>
            <Button />
          </div>
        </nav>
      )}
    </header>
  );
};
