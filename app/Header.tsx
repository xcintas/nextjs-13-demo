import React from 'react'
import Link from 'next/link';

function Header() {
  return (
    <header className="bg-blue-500 w-full h-20 p-5 flex items-center">
      <Link href="/" className="px-2 text-white">Go to homepage</Link>
      <Link href="/todos" className="px-2 text-white">Go to todos</Link>
      <Link href="/search" className="px-2 text-white">Go to search</Link>
    </header>
  )
}

export default Header;