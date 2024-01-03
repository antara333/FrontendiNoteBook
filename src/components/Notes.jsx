import React, { useContext, useEffect, useRef, useState } from "react";
import NoteItem from "./NoteItem";
import Addnote from "./Addnote";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/NoteContext";

const Notes = () => {
  const navigate = useNavigate();
  const context = useContext(noteContext);
  const [note, setNote] = useState({
    id: null,
    title: "",
    description: "",
    tag: "",
  });
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
  }, [localStorage.getItem("token")]);
  const ref = useRef(null);
  const closeref = useRef(null);
  const updateNote = async (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      title: currentNote.title,
      description: currentNote.description,
      tag: currentNote.tag,
    });
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    editNote(note.id, note.title, note.description, note.tag);
    closeref.current.click();
  };
  return (
    <>
      <Addnote />
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        ref={ref}
        data-bs-target="#exampleModal"
        style={{ display: "none" }}
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3" />
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  aria-describedby="emailHelp"
                  value={note.title}
                  onChange={onChange}
                  required
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your Notes with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="4"
                  value={note.description}
                  onChange={onChange}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="tag" className="form-label">
                  Tag
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="tag"
                  name="tag"
                  value={note.tag}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={closeref}
              >
                Close
              </button>
              <button
                onClick={handleUpdate}
                type="button"
                className="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <h2 className="my-4">All Notes</h2>
        {notes.map((element, index) => {
          return (
            <NoteItem key={index} note={element} updateNote={updateNote} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
