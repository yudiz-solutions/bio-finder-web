import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

import Moon from '@/src/assets/images/moon.png'
import Sun from '@/src/assets/images/sun.png'
import Surprise from '@/src/assets/images/surprise.png'
import SurpriseModal from './SurpriseModal';

export default function Navbar() {
  const router = useRouter()
  const currentRoute = usePathname()

  const [theme, setTheme] = useState()
  const [surprise, setSurprise] = useState(false)

  function toggleTheme () {
    if (theme === 'dark') {
      setTheme('light')
      localStorage.setItem('bf-theme', 'light')
      document.body.setAttribute('data-mode', 'light')
    } else {
      setTheme('dark')
      localStorage.setItem('bf-theme', 'dark')
      document.body.setAttribute('data-mode', 'dark')
    }
  }

  return (
    <div className='navbar bg-black dark:bg-white'>
      <div className='container'>
        <nav className='flex justify-between items-center h-14'>
          <h1 onClick={() => router.push('/')} className='cursor-pointer text-xl font-semibold text-white dark:text-black'>Bio Finder</h1>
          <ul className='flex gap-10'>
            <li className='text-white dark:text-black'>
              <Link href="/" className={currentRoute === '/' ? `${theme === 'dark' ? 'active-nav-dark' : 'active-nav'} p-2` : 'p-2'}>Home</Link>
            </li>
            <li className='text-white dark:text-black'>
              <Link href="/about" className={currentRoute === '/about' ? `${theme === 'dark' ? 'active-nav-dark' : 'active-nav'} p-2` : 'p-2'}>About</Link>
            </li>
            <li className='cursor-pointer' onClick={() => setSurprise(true)}>
              <Image src={Surprise} width={26} alt='surprise' />
            </li>
            {/* <li className='text-white dark:text-black' onClick={() => toggleTheme()}>
              {
                theme === 'dark' 
                  ? <Image src={Sun} width={24} alt='Sun' />
                  : <Image src={Moon} width={24} alt='Moon' />
              }
            </li> */}
          </ul>
        </nav>
      </div>

      {surprise && <SurpriseModal setSurprise={setSurprise} />}
    </div>
  )
}