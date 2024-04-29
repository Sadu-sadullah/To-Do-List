import React, { useState } from "react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Fab from "@mui/material/Fab";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function captureTask(e) {
    const { name, value } = e.target;

    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={captureTask}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={captureTask}
          name="content"
          placeholder="Write something here..."
          rows="3"
          value={note.content}
        />
        <Fab
          title="Add Note"
          sx={{
            position: "absolute",
            right: "5px",
            bottom: "5px",
            backgroundColor: "#f55b13e5",
            color: "white",
            "&:hover": {
              backgroundColor: "#2F4858",
            },
          }}
          onClick={() => {
            props.onClick(note);
            setNote({
              title: "",
              content: "",
            });
          }}>
          <LibraryBooksIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
