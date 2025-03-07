import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
        <nav>
            <Link href={`/`}>Where in the world?</Link>
            
        </nav>
    </div>
  )
}
