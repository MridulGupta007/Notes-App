import {useContext, useState, useEffect} from 'react';
import { NoteList } from '../Context/NoteContext';
import Card from '../Child-Components/Card'
import PinnedNotes from './PinnedNotes';
import ReactPaginate from 'react-paginate';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
const Notes = () => {
    const noteGetter = useContext(NoteList)
    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(noteGetter.display.slice(itemOffset, endOffset))  
        setPageCount(Math.ceil(noteGetter.display.length / itemsPerPage));

    }, [itemOffset, itemsPerPage, noteGetter.display])

  
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % noteGetter.display.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    return(
        <>
        <div className='flex flex-col w-full h-[100vh]'>
        
        {noteGetter.pinnedNotes.length > 0 && <PinnedNotes />}
        
        <span className='font-semibold text-[#27374D] tracking-wider self-center p-4 underline underline-offset-2 decoration-[#023e8a] decoration-4'>Your Notes</span>
        <div className='flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:px-5 mb-2'>
                    {/* Map Added or Existing Notes, send Object and Index to Card.js*/}
                    
                    {currentItems.map((elem,index) => {
                        return(
                            <Card obj={elem} index={index}/>
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
        
    


        </>
    )

}

export default Notes

