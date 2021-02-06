import React, { useState } from "react";
import PrimarySearchAppBar from "./components/header";
import CreateNote from "./components/createnotes";
import Note from "./components/Note";
function App(){
  const [noteArr,setNotArr] = useState([])

  function addNotes(note) {

     setNotArr((preVal)=>{
        return [...preVal,note]
     }) 
     console.log(note)
  }

  function onDelete(id) {
    let new_todo = [...noteArr]
    new_todo.splice(id,1);
   setNotArr(new_todo);
  }
  return(
    <div>
      <PrimarySearchAppBar/>
      <CreateNote passNote={addNotes}/>
      {
        noteArr.map((element,i)  =>{
          return(
            <Note key={i} id={i} title={element.title} des={element.des} del={onDelete}/>
          )
        })
      }
    </div>
  )
}


export default App;
