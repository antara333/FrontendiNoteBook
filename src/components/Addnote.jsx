import React, { useContext, useState } from "react";
import noteContext from "../context/notes/NoteContext";
const Addnote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const handleAdd = (e) => {
    e.preventDefault();
    addNote(
      document.getElementById("title").value,
      document.getElementById("description").value,
      document.getElementById("tag").value
    );
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("tag").value = "";
  };
  return (
    <div>
      <h2>Add a Note</h2>
      <form className="my-3" onSubmit={handleAdd}>
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
            minLength={5}
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
            rows="6"
            minLength={5}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input type="text" className="form-control" id="tag" name="tag" />
        </div>
        <button type="submit" className="btn btn-primary my-3">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default Addnote;
