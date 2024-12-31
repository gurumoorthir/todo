import React from 'react'

function EditTopicForm() {
  return (
    <>
        <form action="" className='flex flex-col gap-4 mx-2'>
            <label htmlFor="title" className='font-bold'>Topic Title</label>
            <input type="text" id='title' placeholder='Enter topic title' className='border border-slate-500 px-8 py-2'/>
            <label htmlFor="title" className='font-bold'>Topic Description</label>
            <input type="text" id='description' placeholder='Enter topic description' className='border border-slate-500 px-8 py-2'/>
            <button className='text-white bg-green-800 font-bold text-sm px-4 py-2 w-fit rounded-sm'> Update Topic </button>
        </form>
    </>
  )
}

export default EditTopicForm