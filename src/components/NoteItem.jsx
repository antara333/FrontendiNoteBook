import React from "react";
import { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { note, updateNote } = props;
  const { deleteNote } = context;
  const handleDelete = () => {
    deleteNote(note._id);
  };
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex " style={{ justifyContent: "end" }}>
            <span className="badge bg-secondary ">{note.tag}</span>
          </div>
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i
            className="fa-regular fa-trash-can mx-2"
            onClick={handleDelete}
          ></i>
          <i
            className="fa-regular fa-pen-to-square mx-2"
            onClick={() => {
              updateNote(note);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
