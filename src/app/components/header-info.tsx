import Image from 'next/image'
import React from 'react'

export default function HeaderInfo() {
  return (
    <div className='pt-[80px] relative h-[35vh]'>
      <Image className='opacity-80' src={'/images/header-2.png'} fill alt='mas io' />
      <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center">
        <Image className='w-20 h-20 border rounded-full' src={'/images/rio.png'} width={100} height={100} alt='mas io' />
        <div className='text-white'>
          <h1 className='text-xl font-bold'>Mas io airdrop</h1>
          <div className='text-center text-xs font-semibold'>
            <p>Mini app</p>
            <p>Depin</p>
            <p>Tesnet</p>
            <p>Extention</p>
          </div>
        </div>
      </div>
    </div>
  )
}
