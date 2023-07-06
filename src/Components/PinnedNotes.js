import { useContext } from 'react'
import { NoteList } from '../Context/NoteContext'
import BookmarkRemoveRoundedIcon from '@mui/icons-material/BookmarkRemoveRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TextField } from '@mui/material';
const PinnedNotes = () => {
  const pinnedNotes = useContext(NoteList)

  return (
    <div className='flex flex-col w-full'>
      <h1 className='font-semibold text-[#27374D] tracking-wider self-center p-4 underline underline-offset-2 decoration-[#023e8a] decoration-4'>Pinned</h1>
      <div className='flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:px-5'>
        {pinnedNotes.pinnedNotes.map((elem, index) => {
          return (
            <PinnedCard obj={elem} index={index} />
          )
        })}
      </div>
    </div>
  )
}

export default PinnedNotes


const PinnedCard = ({ obj, index }) => {
  const pinnedCard = useContext(NoteList)
  return (
    <div className="flex flex-col border shadow-xl w-60 rounded-xl border-[#ffd166]">

      <div className="flex flex-1 justify-end items-start pr-2 gap-3">
        <button onClick={() => {
          const notesArray = [...pinnedCard.notesCollection]
          const pinnedUpdatedArray = [...pinnedCard.notesCollection]
          notesArray.splice(obj.originalIndex, 0, obj)
          pinnedCard.setNotesCollection(notesArray)

          pinnedUpdatedArray.splice(index, 1)
          pinnedCard.setPinnedNotes(pinnedUpdatedArray)

          toast.success('Task Unpinned', {
            position: "top-center",
            autoClose: 2000,
            theme: 'dark'
          });


        }} title="Unpin"><BookmarkRemoveRoundedIcon /></button>
        <button onClick={() => {
          pinnedCard.setDeletedNotes(prev => [...prev, obj])
          const newArr = [...pinnedCard.pinnedNotes]
          newArr.splice(index, 1)
          pinnedCard.setPinnedNotes(newArr)

          toast.success('Task Deleted', {
            position: "top-center",
            autoClose: 2000,
            theme: 'dark'
          });
        }} title='Delete'><DeleteIcon /></button>

      </div>


      <div className="flex flex-col py-2 px-3 gap-3">
        <TextField className="text-center text-[20px]" multiline defaultValue={obj.header} InputProps={{ readOnly: true }} label='Title' variant="standard" />
        <TextField className="text-center text-[20px]" multiline defaultValue={obj.tagline} InputProps={{ readOnly: true }} label='Tagline' variant="standard" />
        <TextField className="text-center text-[20px]" multiline defaultValue={obj.content} InputProps={{ readOnly: true }} label='Note' variant="standard" />
      </div>



    </div>
  )
}