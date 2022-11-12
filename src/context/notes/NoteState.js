import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";
const NoteState=(props)=>{
    const notesInitials=[
          {
              "_id": "636370ee400c9f65c034a84c",
              "user": "6362583764643c945484c84e",
              "title": "My first note",
              "description": "Video no 52 is going on",
              "tag": "mynotebook",
              "date": "2022-11-03T07:42:38.966Z",
              "__v": 0
            },
            {
              "_id": "63637121400c9f65c034a84e",
              "user": "6362583764643c945484c84e",
              "title": "My first note",
              "description": "Video no 52 is going on",
              "tag": "mynotebook",
              "date": "2022-11-03T07:43:29.475Z",
              "__v": 0
            },
            {
              "_id": "63637122400c9f65c034a850",
              "user": "6362583764643c945484c84e",
              "title": "My first note",
              "description": "Video no 52 is going on",
              "tag": "mynotebook",
              "date": "2022-11-03T07:43:30.350Z",
              "__v": 0
            },
            {
              "_id": "636372062948bb5358cb9efb",
              "user": "6362583764643c945484c84e",
              "title": "My first note",
              "description": "Video no 52 is going on",
              "tag": "mynotebook",
              "date": "2022-11-03T07:47:18.963Z",
              "__v": 0
            }
          ]
          const [notes,setNotes]=useState(notesInitials);
          // Add a Note
          const addNote=(title,description,tag)=>{
            console.log("Adding a new note");              
           const note=  {
              "_id": "636372062948bb5358ccb9efb",
              "user": "6362583764643c9454384c84e",
              "title": title,
              "description":description,
              "tag": tag,
              "date": "2022-11-03T07:47:18.963Z",
              "__v": 0
            }
            setNotes(notes.concat(note))

          }
          // Delete a Note
          const deleteNote=(id)=>{
            console.log("Deleting the note with id" +id);
            const newNotes=notes.filter((note)=>{return note._id!==id})
            setNotes(newNotes);
            
          }
          // Edit a Note
          const editNote=(id,title,description,tag)=>{
            for (let index = 0; index < notes.length; index++) {
              const element = notes[index];
              if(element._id===id){
                element.title=title
                element.description=description
                element.tag=tag
              }
              
            }
            
          }

 return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;