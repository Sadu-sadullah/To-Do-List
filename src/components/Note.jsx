import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button title="Delete Note" onClick={() => props.checkClick(props.id)}>
        {" "}
        <DeleteForeverIcon
          sx={{
            position: "absolute",
            right: "5px",
            bottom: "5px",
            width: "1.5em",
            height: "1.5em",
            color: "#f55b13e5",
            "&:hover": {
              color: "red",
            },
          }}
        />
      </button>
    </div>
  );
}

export default Note;
