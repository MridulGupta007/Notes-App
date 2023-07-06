import { useContext, useState } from 'react'
import { NoteList } from '../Context/NoteContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "@mui/material";
import { TextField } from '@mui/material';
const TakeNotes = () => {
    const [title, setTitle] = useState('')
    const [tagline, setTagline] = useState('')
    const [note, setNote] = useState('')
    const noteSetter = useContext(NoteList)

    return (
        <div className='flex flex-col gap-5 py-5 px-3 rounded-xl '>
            <TextField label='Title' multiline className='w-5/12 shadow-md self-center' onChange={e => setTitle(e.target.value)} />
            <TextField label='Tagline' multiline className='w-5/12 shadow-md self-center' onChange={(e) => setTagline(e.target.value)} />
            <TextField label="Content" multiline className='w-5/12 shadow-md self-center' onChange={e => setNote(e.target.value)} />
            <Button variant='contained' color='success' onClick={() => {
                if (title.length === 0 || tagline.length === 0 || note.length === 0) {
                    toast.error("Invalid Task, Fill all details", { position: "top-center", theme: 'dark' })
                }
                else {
                    noteSetter.setNotesCollection(prev =>
                        [...prev, { header: title, tagline: tagline, content: note, originalIndex: prev.length }])

                    setNote('')
                    setTitle('')
                    noteSetter.setModal(false)
                    toast.success("Task Added", {
                        position: "top-center",
                        theme: "dark"
                    })
                }

            }} className='w-1/12 h-10 self-center'>Add</Button>

            
        </div>
    )
}

export default TakeNotes