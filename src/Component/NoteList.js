import { useEffect } from "react";

const NoteList = (props) => {
        useEffect(()=>{console.log(props.note)})
          return (
            <li key={props.note.id}>
              <strong>{props.note.content}</strong>
              <p>{props.note.date}</p>
              <button
                onClick={() => {
                  props.handleDelete(props.note.id);
                }}
              >
                Delete
              </button>
              <hr />
            </li>
          );
        }
     

 
export default NoteList;