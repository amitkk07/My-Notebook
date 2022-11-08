import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";
const NoteState=(props)=>{
    const s1={
        "name":"Amit",
        "class": "10A"
    }
    const [state, setState]=useState(s1);
     const update=()=>{
        setTimeout(() => {
            setState({
                "name":" Kanaujiya",
               "class": "12A"
            })    
         },3000);
    } 
    return(
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;