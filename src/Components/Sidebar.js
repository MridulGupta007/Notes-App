import React, { useContext } from 'react';
import SideElements from '../Child-Components/SideElement'
import FolderDeleteRoundedIcon from '@mui/icons-material/FolderDeleteRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import { NoteList } from '../Context/NoteContext';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {

 
  const menu = useContext(NoteList)

  return (
    <>
      <div className='hidden sm:inline-block border-solid border-color border pt-2'>

      <div className='flex items-center justify-center border-b hover:bg-side-element rounded-xl shadow-md px-2 mb-2'> 
      <ChecklistRoundedIcon />
      <NavLink to='/'><SideElements title='Notes' className='ml-5' /></NavLink> 
      </div>
      
      <div className='flex items-center justify-around gap-1 border-b hover:bg-side-element rounded-xl shadow-md px-2'>
      <FolderDeleteRoundedIcon />
      <NavLink to='/deleted'><SideElements title='Deleted Notes' className='ml-5' /></NavLink>
      </div>
        
      </div>
      {/* Conditional Rendering of Mobile Navbar when state turns to true */}
      {menu.mobNav && <MobBar />}

    </>
  )
}

export default Sidebar

const MobBar = () => {


  return (
    <>
      <div className='absolute h-full w-full bg-white z-50 sm:hidden '>



      <div className='flex items-center justify-center border-b hover:bg-side-element rounded-xl shadow-md mb-2 gap-10'> 
      <ChecklistRoundedIcon />
      <NavLink to='/'><SideElements title='Notes' className='' /></NavLink> 
      </div>

      
      <div className='flex items-center justify-center border-b hover:bg-side-element rounded-xl shadow-md gap-10'>
      <FolderDeleteRoundedIcon />
      <NavLink to='/deleted'><SideElements title='Deleted Notes' className='' /></NavLink>
      </div>


        
      </div>
    </>
  )
}

export { MobBar }

