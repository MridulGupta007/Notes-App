import React, { useContext } from 'react'
import { NoteList } from '../Context/NoteContext'


const SideElements = ({className, title, cl}) => {
  const stateSetter = useContext(NoteList)
  return (
    
   <div className='px-1 cursor-pointer' onClick={() => stateSetter.setMobNav(!stateSetter.mobNav)}>
   <div className={'flex justify-around w-full p-5 font-semibold text-[#27374D] tracking-wider leading-side-element ' + cl}>
      <div className='flex w-40'>
        
        <h3 className={className}> {title}</h3>
      </div>
      

    </div>
    </div>
  )
}

export default SideElements