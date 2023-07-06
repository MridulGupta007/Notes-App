import {useContext} from 'react';
import { NoteList } from '../Context/NoteContext';
import Card from '../Child-Components/Card'
import PinnedNotes from './PinnedNotes';

const Notes = () => {
    const noteGetter = useContext(NoteList)

    return(
        <div className='flex flex-col w-full'>
        
        {noteGetter.pinnedNotes.length > 0 && <PinnedNotes />}
        
        <span className='font-semibold text-[#27374D] tracking-wider self-center p-4'>Your Notes</span>
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