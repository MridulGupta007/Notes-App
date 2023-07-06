import { useContext } from "react";
import { NoteList } from "../Context/NoteContext";
//import hamburger from '../assets/Hamburger.svg';
import ReactModal from "react-modal";
import TakeNotes from "../Child-Components/TakeNotes";
import { ToastContainer } from "react-toastify";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Fab, Button } from "@mui/material";
const Header = () => {
   const searchHandler = useContext(NoteList)

    return(
        <div className="flex items-center gap-4 px-2 py-1 border-b">
            
            <button onClick={() => {
                searchHandler.setMobNav(!searchHandler.mobNav)
            }}>
                
                <WidgetsIcon />
            </button>
            
            
            <h1 className="text-[20px] flex-2"><span className="text-[#087EA4] font-semibold">Not</span>ADO</h1>
            
            <div className="flex flex-1 items-center justify-around gap-3">
            
                <input type='text' placeholder="Search Notes" onChange={(e) => {searchHandler.setSearchHeader(e.target.value)
                searchHandler.setDisplay(() => searchHandler.notesCollection.filter(elem => elem.header.toLowerCase().includes(e.target.value.toLowerCase()) || elem.content.toLowerCase().includes(e.target.value.toLowerCase()) || elem.tagline.toLowerCase().includes(e.target.value.toLowerCase()) ))}} className="bg-[#f5f5f5] px-3 hover:placeholder:translate-y-[-20px] hover:placeholder:translate-x-[8px] hover:placeholder:text-[10px] focus:placeholder:translate-y-[-20px] focus:placeholder:translate-x-[8px] focus:placeholder:text-[10px]  placeholder:duration-300 placeholder:ease-in-out focus:outline-[#087EA4] text-[grey] w-11/12 h-12 rounded-full" />
            
                <Button onClick={() => searchHandler.setModal(true)} size='small' title="Add Task" variant='text'><AddRoundedIcon /></Button>
            
            </div>
            
            <ReactModal
            isOpen={searchHandler.modal}
            contentLabel="Input Task"
            onRequestClose={() => searchHandler.setModal(false)}
            className="bg-gradient-to-br from-[#ffffff] to-[#f5f5f5] h-screen">
            
                <div className="flex w-full self-end justify-end py-[4%] px-[6%]">
            
                    <Fab size="medium" onClick={() => searchHandler.setModal(false)} color="error" variant="outlined"><CancelRoundedIcon /></Fab>
            
                </div>
            
                <TakeNotes />
                
            </ReactModal>
            
            <ToastContainer />
        </div>
    )

}

export default Header