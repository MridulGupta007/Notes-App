import { useContext, useState } from "react";
import { NoteList } from "../Context/NoteContext";
import { toast } from "react-toastify";
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import ReactModal from "react-modal";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { TextField, Button, Fab } from "@mui/material";
import { ModalState } from "../Context/ModalContext";



const Card = ({ obj, index }) => {
  const cardSetter = useContext(NoteList)
  const [editable, setEditable] = useState(false)

  const handleDelete = () => {

    cardSetter.setDeletedNotes(prev => [...prev, obj])
    const newArr = [...cardSetter.notesCollection]
    newArr.splice(index, 1)
    cardSetter.setNotesCollection(newArr)

    toast.success('Task Deleted', {
      position: "top-center",
      autoClose: 2000,
      theme: 'dark'
    });
  }

  const handlePin = () => {
    cardSetter.setPinnedNotes(prev => [...prev, obj])
    const newArr = [...cardSetter.notesCollection]
    newArr.splice(index, 1)
    cardSetter.setNotesCollection(newArr)

    toast.success('Task Pinned', {
      position: "top-center",
      autoClose: 2000,
      theme: 'dark'
    });
  }

  const handleEdit = () => {
    setEditable(true)
  }

  return (
    <ModalState.Provider value={{editable, setEditable}}>
    <div className="flex flex-col border shadow-xl w-60 rounded-xl">

      <div className="flex justify-end gap-2 py-1 px-2">

        <button onClick={handleDelete} title='Delete'><DeleteIcon /></button>

        <button title='Edit' onClick={handleEdit}><EditSharpIcon /></button>

        <button onClick={handlePin} title='Pin'><BookmarkAddRoundedIcon /></button>
      </div>

      <div className="flex flex-col py-2 px-3 gap-3">
        <TextField className="text-center text-[20px]" multiline defaultValue={obj.header} InputProps={{readOnly: true}} label='Title' variant="standard"/>
        <TextField className="text-center text-[20px]" multiline defaultValue={obj.tagline} InputProps={{readOnly: true}} label='Tagline' variant="standard"/>
        <TextField className="text-center text-[20px]" multiline defaultValue={obj.content} InputProps={{readOnly: true}} label='Note' variant="standard"/>
      </div>

      <ReactModal
        isOpen={editable}
        contentLabel="Input Task"
        onRequestClose={() => setEditable(false)}
        className="bg-gradient-to-br from-[#ffffff] to-[#f5f5f5] h-screen">

        <div className="flex w-full self-end justify-end py-[4%] px-[6%]">

          <Fab onClick={() => setEditable(false)} color="error" variant="outlined" size='medium'><CancelRoundedIcon /></Fab>

        </div>

        
        <EditModal obj={obj} index={index} />
      </ReactModal>
    </div>
    </ModalState.Provider>
  )
}


export default Card


const EditModal = ({obj, index}) => {
  const [title, setTitle] = useState('')
  const [tagline, setTagline] = useState('')
  const [note, setNote] = useState('')
  //const [object, setObject] = useState({})
  //const noteSetter = useContext(NoteList)
  
  const modalState = useContext(ModalState)
  return(
  <div className='flex flex-col gap-5 py-5 px-3 rounded-xl '>
     <TextField label='Title' multiline className='w-5/12 shadow-md self-center' defaultValue={obj.header}  onChange={e => setTitle(e.target.value)} />
     <TextField label='Tagline' multiline className='w-5/12 shadow-md self-center' defaultValue={obj.tagline}  onChange={(e) => setTagline(e.target.value)} />
     <TextField label="Content" multiline className='w-5/12 shadow-md self-center' defaultValue={obj.content}  onChange={e => setNote(e.target.value)} />
  <Button variant="contained" color="success" onClick={() => {
      if(title.length === 0 || tagline.length === 0 || note.length === 0){ 
       toast.error("Invalid Task, Fill all details", {position: "top-center", theme: 'dark'}) }
      else{
    
        setNote('')
        setTitle('')
        modalState.setEditable(false)
        toast.success("Task Edited",{
          position: "top-center",
          theme: "dark"
      })
  }
  
  }} className='shadow-sm rounded-full bg-[#087EA4] text-[white] w-28 h-10 self-center shadow-[#087EA4]'>Save</Button>
  
  {/* <ToastContainer /> */}
</div>)
}