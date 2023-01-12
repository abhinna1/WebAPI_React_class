import ReviewCounter from "./Component/UseStateClass/ReviewCounter";
import { useState } from "react";
import { useEffect } from "react";

function App(props) {
  // Handle form submit.
  const handleSubmit = (e) => {
    e.preventDefault();
    const note = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };
    setNotes(notes.concat(note));
    // notes.push(note)
  };

  // Handle change in form input.
  const handleChange = (e) => {
    console.log(e.target.value);
    setNewNote(e.target.value);
  };

  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  return (
    <>
      <h2>Notes</h2>
      <button
        onClick={() => {
          setShowAll(!showAll);
          // showAll ? notes: notes.filter()

        }}
      >
        Show All?
      </button>
      <ul>
        <hr />
        {notes.map((note) => {
          return (
            <li key={note.id}>
              <strong>{note.content}</strong>
              <p>{note.date}</p>
              <hr />
            </li>
          );
        })}
      </ul>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button>add</button>
      </form>
    </>
  );
}

export default App;
