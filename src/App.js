import { useState, useEffect } from "react";
import axios from "axios";
import NoteList from "./Component/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/notes")
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // Handle form submit.
  const handleSubmit = (e) => {
    e.preventDefault();

    const note = {
      // id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };

    if (newNote !== "") {
      axios
        .post("http://localhost:3001/notes", note)
        .then((response) => {
          console.log(response);
          setNotes(notes.concat(response.data));
          setNewNote("");
        })
        .catch((err) => console.log(err));
    }
  };

  // Handle change in form input.
  const handleChange = (e) => {
    console.log(e.target.value);
    setNewNote(e.target.value);
  };

  // Handle task delete.
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/notes/${id}`);
      setNotes(notes.filter((n) => n.id !== id));
    } catch (e) {
      console.log(e);
    }

    // Using .then() & .catch().

    // .then(response => {
    //   console.log(response)
    //   setNotes(notes.filter(n => n.id !== id ))
    // })
    // .catch(err => console.log(err))
  };

  return (
    <>
      <h2>Notes</h2>
      <button
        onClick={() => {
          setShowAll(!showAll);
        }}
      >
        Show All?
      </button>
      <ul>
        <hr />
        {notes.map((note) => {
          return <NoteList note = {note} handleDelete={handleDelete}/>
        })}

      </ul>
      
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button>Add</button>
      </form>
    </>
  );
}

export default App;
