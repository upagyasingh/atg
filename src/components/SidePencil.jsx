import { PencilIcon } from 'lucide-react'
import React from 'react'

function SidePencil() {
  return (
    <>
      <div className='h-[70px] w-[70px] rounded-full red-gr fixed bottom-4 right-4 z-50 flex justify-center items-center text-white'>
        <PencilIcon/>
      </div>
    </>
  )
}

export default SidePencil
