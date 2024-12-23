import React from 'react'
import NavPost from './Nav/NavPost'
import PostCard from './PostCard'
import Place from './Place'

function Post() {
  return (
    <div className='bg-white'>
     <section className='px-20'>
      <NavPost/> 
      <div className='grid grid-cols-3 1150:grid-cols-1'>
        <div className=' col-span-2 pt-4  1150:grid-cols-3 flex justify-center  '>
            <PostCard/>
        </div>
        <div className='mt-3'> 
            <Place/>
            
        </div>
        </div> 

     
    </section> 
    </div>
  )
}

export default Post
