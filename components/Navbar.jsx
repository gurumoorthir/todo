import React from 'react'
import Link from 'next/link'
function Navbar () {
  return (
    <>
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
        <Link className='text-white font-bold' href={"/"}> Coding With Guru </Link>
        <Link className='bg-white  font-bold p-2 rounded-lg' href={"/addtopic"}>Add Topic</Link>
    </nav>
    </>
  )
}

export default Navbar 