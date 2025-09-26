import { ModeToggle } from '@/components/mode-toggle'
import Image from 'next/image'
import React from 'react'

export default function TopNavbar() {
  return (
    <nav className='top-0 z-20 sticky p-2 backdrop-blur-sm '>
      <div className="flex items-center justify-between h-[60px] max-w-lg mx-auto">
        <div className='flex items-center justify-end space-x-1'>
          <div className="flex items-center gap-0.5">
            <Image src='/images/logo.png' alt={'logo'} width={40} height={40} className='relative' />
          </div>
          <h1 className='text-lg font-bold'>Mas io Airdrop</h1>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}
