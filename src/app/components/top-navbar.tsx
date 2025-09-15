import { ModeToggle } from '@/components/mode-toggle'
import React from 'react'

export default function TopNavbar() {
  return (
    <nav className='w-full fixed top-0 z-20'>
      <div className="flex items-center justify-between h-[80px] px-4 max-w-lg mx-auto">
        <div>
          <div className="flex items-center gap-0.5 text-white">
            <h2 className='font-bold text-xl'>Mas io</h2>
          </div>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}
