import { NoteList } from '../src/Context/NoteContext';
import './App.css';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
//import Notes from './Components/Notes';
import { Outlet } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
//import DeletedNotes from '../src/Components/DeletedNotes'
//bg-[#060047]
//bg-[#79E0EE]
function App() {
 
  const [notesCollection, setNotesCollection] = useState([])
  const [deletedNotes, setDeletedNotes] = useState([])
  const [searchHeader, setSearchHeader] = useState('')
  const [display, setDisplay] = useState([])
  const [pinnedNotes, setPinnedNotes] = useState([])
  const [mobNav, setMobNav] = useState(false)
  const [modal, setModal] = useState(false)
  // const [editable, setEditable] = useState(false)
 
  useEffect(() => {
    setDisplay([...notesCollection])
  }, [notesCollection])




 
  return (
    <NoteList.Provider value={{ modal, setModal, notesCollection, setNotesCollection, deletedNotes, setDeletedNotes, searchHeader, setSearchHeader, display, setDisplay, pinnedNotes, setPinnedNotes, mobNav, setMobNav}}>
    <>
      <Header />
      <div className='flex min-h-screen gap-7'>
      {mobNav && <Sidebar />}
      <Outlet />

      </div>

    </>
    </NoteList.Provider>
  );
}

export default App;
