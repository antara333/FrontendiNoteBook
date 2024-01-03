import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "https://inotebookbackend-s50o.onrender.com/";
  const [notes, setNotes] = useState([]);
  const getNotes = async () => {
    const response = await fetch(`${host}api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.error) {
    } else {
      setNotes(data.note);
    }
  };
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const res = await response.json();
    props.showAlert(res.msg);
    setNotes(notes.concat(res.note));
  };
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const res = await response.json();
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let i = 0; i < newNotes.length; i++) {
      const element = newNotes[i];
      if (element._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
      }
    }
    props.showAlert(res.msg);
    setNotes(newNotes);
  };
  const deleteNote = async (id) => {
    const response = await fetch(`${host}api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    const res = await response.json();
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    props.showAlert(res.msg);
    setNotes(newNotes);
  };
  return (
    <>
      <noteContext.Provider
        value={{ notes, getNotes, addNote, editNote, deleteNote }}
      >
        {props.children}
      </noteContext.Provider>
    </>
  );
};

export default NoteState;
