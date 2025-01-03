import React from 'react'
import Removebtn from './Removebtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'
function TopicsList() {
  return (
   <>
   <div className='p-4 border border-slate-400 my-3 flex justify-between gap-5 items-start'>
    <div>
        <h2 className='font-bold text-2xl'>Topic Title</h2>
        <h2>Topic Description</h2>
    </div>
    <div className='flex gap-2'>
        <Removebtn/>
        <Link href={"/editTopic/123"}>
            <HiPencilAlt size={20}/>
        </Link>
    </div>
   </div>
   </>
  )
}

export default TopicsList