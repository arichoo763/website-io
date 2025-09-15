import { TDatalinks } from '@/data/links'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function LinkItem(props: TDatalinks) {
  return (
    <Link
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className='border dark:bg-slate-950 bg-white rounded-lg capitalize hover:scale-105 duration-300'
    >
      <div className='flex items-center p-2'>
        <div className='w-8 h-8 shrink-0'>
          <Image className='w-full h-full border rounded-full' src={props.logo} width={100} height={100} alt='mas io' />
        </div>
        <div className='flex-1 flex text-sm justify-center'>{props.label}</div>
        <div className='w-12 shrink-0'></div>
      </div>
    </Link>
  )
}
