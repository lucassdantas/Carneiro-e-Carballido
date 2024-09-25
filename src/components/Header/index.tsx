import { useEffect, useState } from 'react';
import { MobileHeader } from './MobileHeader';
import { DesktopTransparentHeader } from '@/components/Header/DesktopTransparentHeader';
import { DesktopHeader } from '@/components/Header/DesktopHeader';

export const Header = ({isTransparentHeader}:{isTransparentHeader:boolean}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? <MobileHeader /> : isTransparentHeader? <DesktopTransparentHeader/> : <DesktopHeader/>}
    </>
  );
};
