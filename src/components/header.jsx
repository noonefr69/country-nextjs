import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './modeToggler'

export default function Header() {
  return (
    <div className=''>
        <nav className='px-7 py-7 flex items-center justify-between shadow-md dark:bg-[hsl(209,23%,22%)] bg-white'>
            <Link className='text-lg font-bold' href={`/`}>Where in the world?</Link>
            <ModeToggle />
        </nav>
    </div>
  )
}
