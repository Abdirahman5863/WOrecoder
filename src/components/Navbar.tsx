import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
 

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4  ' >
      {/* search bar */}
      <div className='rounded-full hidden md:flex  item-center ring-[1.5px] ring-gray-300 p-2 gap-2 text-xs'>
        <Image src={'/search.png'} alt='search' width={20} height={20}/>
        <input type="text" className='w-[200px] bg-transparent outline-none p-1 ' placeholder='Search.....' />
      </div> 
      <div className='flex gap-6  items-center justify-end w-full'>
         <div >
          <Image src={'/bell.png'} alt='logo' width={20} height={20}/>
         </div>
         <div>
          {/* <Image src={'/user.png'} alt='logo' width={20} height={20}/>   */}
        <UserButton/>
          </div>
      </div>
       </div>
  )
}

export default Navbar