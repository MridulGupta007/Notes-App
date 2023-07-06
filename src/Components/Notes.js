import {useContext} from 'react';
import { NoteList } from '../Context/NoteContext';
import Card from '../Child-Components/Card'
import PinnedNotes from './PinnedNotes';
import ReactPaginate from 'react-paginate';
const Notes = () => {
    const noteGetter = useContext(NoteList)

    return(
        <div className='flex flex-col w-full'>
        
        {noteGetter.pinnedNotes.length > 0 && <PinnedNotes />}
        
        <span className='font-semibold text-[#27374D] tracking-wider self-center p-4 underline underline-offset-2 decoration-[#023e8a] decoration-4'>Your Notes</span>
        <div className='flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:px-5'>
                    {/* Map Added or Existing Notes, send Object and Index to Card.js*/}
                    
                    {noteGetter.display.map((elem,index) => {
                        return(
                            <Card obj={elem} index={index}/>
                        )
                    })}
        </div>
        </div>
    )

}

export default Notes

// const PaginatedItems = ({itemsPerPage}) => {
//     const [currentitems, setcurrentitems] = useState(null);  
//     const [pageCount, setPageCount] = useState(0);  
//     const [elementOffset, setElementOffset] = usestate(0); 
    
//     useEffect(() => {    
//         const endOffset = itemOffset + itemsPerPage;  
//         console.log(`Loading items from ${itemOffset} to ${endOffset}`);  
//         setCurrentItems(items.slice(itemOffset, endOffset));  
//         setPageCount(Math.ceil(items.length / itemsPerPage));  
//       }, [elementOffset, elements per page]); 


// }