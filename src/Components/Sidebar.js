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

        <NavLink to='/'><div className='flex items-center justify-center border-b hover:bg-side-element rounded-xl shadow-md px-2 mb-2'>
          <ChecklistRoundedIcon />
          <SideElements title='Notes' className='ml-5' />
        </div></NavLink>

        <NavLink to='/deleted'><div className='flex items-center justify-around gap-1 border-b hover:bg-side-element rounded-xl shadow-md px-2'>
          <FolderDeleteRoundedIcon />
          <SideElements title='Deleted Notes' className='ml-5' />
        </div></NavLink>

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



      <NavLink to='/'><div className='flex items-center justify-center border-b hover:bg-side-element rounded-xl shadow-md mb-2 gap-10'>
          <ChecklistRoundedIcon />
          <SideElements title='Notes' className='' />
        </div></NavLink>


        <NavLink to='/deleted'><div className='flex items-center justify-center border-b hover:bg-side-element rounded-xl shadow-md gap-10'>
          <FolderDeleteRoundedIcon />
          <SideElements title='Deleted Notes' className='' />
        </div></NavLink>



      </div>
    </>
  )
}

export { MobBar }

