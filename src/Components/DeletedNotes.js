import { useContext } from "react";
import { NoteList } from "../Context/NoteContext";
import { TextField } from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
const DeletedNotes = () => {
  const deleteGetter = useContext(NoteList)


  return (
    <div className="flex flex-col w-full">

      <span className='font-semibold text-[#27374D] tracking-wider self-center p-4 underline underline-offset-2 decoration-[#023e8a] decoration-4'>Deleted Notes</span>
      <div className='flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:px-5'>
        {deleteGetter.deletedNotes.map((elem, index) => {
          return (
            <DeleteCard obj={elem} index={index} />
          )
        })}
      </div>
    </div>
  )

}

export default DeletedNotes


const DeleteCard = ({ obj, index }) => {
  const deleteCard = useContext(NoteList)
  return (
    <div className="flex flex-col border shadow-xl w-60 rounded-xl border-[#f72585]">
      <div className="flex justify-end gap-2 py-1 px-2">
        <button onClick={() => {


          const deleteArr = [...deleteCard.deletedNotes]
          deleteCard.setNotesCollection(prev => [...prev, obj])
          deleteArr.splice(index, 1)
          deleteCard.setDeletedNotes(deleteArr)


        }} title="Restore"><RestoreIcon /></button>
      </div>




      <div className="flex flex-col py-2 px-3 gap-3">
        <TextField className="text-center text-[20px]" multiline defaultValue={obj.header} InputProps={{ readOnly: true }} label='Title' variant="standard" />
        <TextField className="text-center text-[20px]" multiline defaultValue={obj.tagline} InputProps={{ readOnly: true }} label='Tagline' variant="standard" />
        <TextField className="text-center text-[20px]" multiline defaultValue={obj.content} InputProps={{ readOnly: true }} label='Note' variant="standard" />
      </div>



    </div>
  )
}