import { Icon } from '@/components/icon'
import Link from 'next/link'
import React from 'react'

export default function BottomNavbar() {
  return (
    <footer className='max-w-lg mx-auto w-full sticky bottom-0 z-30 backdrop-blur-lg'>
      <div className="px-3 h-[60px] flex items-center justify-center gap-x-4">
        <Link className='bg-white dark:bg-slate-950 h-9 w-9 border flex items-center justify-center rounded-lg' href="https://x.com/mostviralhere?t=CIzuFPVOdi6Fe8ZjDhIXew&s=09" target="_blank" rel="noopener noreferrer">
          <Icon name='fa6-brands:x-twitter' />
        </Link>
        <Link className='bg-white dark:bg-slate-950 h-9 w-9 border flex items-center justify-center rounded-lg' href="https://www.tiktok.com/@kumiscrypto?_t=ZS-8ziqus5KbdR&_r=1" target="_blank" rel="noopener noreferrer">
          <Icon name='logos:tiktok-icon' />
        </Link>
        <Link className='bg-white dark:bg-slate-950 h-9 w-9 border flex items-center justify-center rounded-lg' href="https://t.me/Rweird31" target="_blank" rel="noopener noreferrer">
          <Icon name='logos:telegram' />
        </Link>
      </div>
    </footer>
  )
}
