import { useContext, useState, useEffect } from "react";
import { NoteList } from "../Context/NoteContext";
import { TextField } from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import ReactPaginate from 'react-paginate';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
const DeletedNotes = () => {
  const deleteGetter = useContext(NoteList)
  
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(deleteGetter.deletedNotes.slice(itemOffset, endOffset))  
      setPageCount(Math.ceil(deleteGetter.deletedNotes.length / itemsPerPage));

  }, [itemOffset, itemsPerPage, deleteGetter.deletedNotes])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % deleteGetter.deletedNotes.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="flex flex-col w-full">

      <span className='font-semibold text-[#27374D] tracking-wider self-center p-4 underline underline-offset-2 decoration-[#023e8a] decoration-4'>Deleted Notes</span>
      <div className='flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:px-5'>
        {currentItems.map((elem, index) => {
          return (
            <DeleteCard obj={elem} index={index} />
          )
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<ArrowForwardIosOutlinedIcon color='primary' />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={<ArrowBackIosOutlinedIcon  color='primary'/>}
        renderOnZeroPageCount={null}
        containerClassName='self-center flex gap-10'
      />
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