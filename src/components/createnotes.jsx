import React,{useState} from 'react'
import '../index.css'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


export default function CreateNote(props) {
    const [expand,setExpand] =useState(false)
 
    const [note,createNotes] = useState({
        title : '',
        des: ''
    })

    function inputEvent(e) {
        const {name,value} = e.target

        createNotes((preVal)=>{
            return{
                ...preVal,
                [name]: value
            }
        })
    }

    function post(e) {
        e.preventDefault()
        props.passNote(note)
        createNotes({
            title : '',
            des: ''
        })
    }
    function expandInput() {
        setExpand(true)
    }
    function unDo() {
        setExpand(false)
    }
    return (
        <div className="container">
            <div className="main-form" onDoubleClick={unDo}>
                <div className="form">
                    <form action="" onSubmit={post} >
                       { expand? <input type="text" name="title"
                        value={note.title} onChange={inputEvent}
                        placeholder="Title" required/> : true}
                        <textarea name="des" value={note.des}
                        onChange={inputEvent} cols="15" rows="2" 
                        placeholder="Write a note" required onClick={expandInput}></textarea>
                        {expand? <Button  type="submit" variant="contained" color="primary" className="btn"> 
                            <AddIcon/>
                        </Button> : true}
                    </form>
                </div>
            </div>
        </div>
    )
}