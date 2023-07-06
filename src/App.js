import { NoteList } from '../src/Context/NoteContext';
import './App.css';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import Sidebar from './Components/Sidebar';

function App() {

  const [notesCollection, setNotesCollection] = useState([])
  const [deletedNotes, setDeletedNotes] = useState([])
  const [searchHeader, setSearchHeader] = useState('')
  const [display, setDisplay] = useState([])
  const [pinnedNotes, setPinnedNotes] = useState([])
  const [mobNav, setMobNav] = useState(false)
  const [modal, setModal] = useState(false)


  useEffect(() => {
    setDisplay([...notesCollection])
  }, [notesCollection])





  return (
    <NoteList.Provider value={{ modal, setModal, notesCollection, setNotesCollection, deletedNotes, setDeletedNotes, searchHeader, setSearchHeader, display, setDisplay, pinnedNotes, setPinnedNotes, mobNav, setMobNav }}>
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
