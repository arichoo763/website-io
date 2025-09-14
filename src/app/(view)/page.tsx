import React from 'react'
import HeaderInfo from '../components/header-info'
import LinkItem from '../components/link-item'
import { datalinks } from '@/data/links'

export default function Home() {
  return (
    <div className='max-w-lg mx-auto bg-gradient-to-b from-slate-500/10 to-transparent'>
      <HeaderInfo />
      <div className='flex flex-col w-full gap-1 my-4 px-6 md:-mt-8 relative z-10'>
        {
          datalinks.map((item, index) => (
            <LinkItem {...item} key={index} />
          ))
        }
      </div>
    </div>
  )
}
