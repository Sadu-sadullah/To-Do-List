import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [array, setArray] = useState([]);

  function handleClick(note) {
    event.preventDefault();
    setArray((prevValue) => {
      return [...prevValue, note];
    });
  }

  function checkId(id) {
    setArray((prevValue) => {
      return array.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onClick={handleClick} />
      {array.map((note, index) => (
        <Note
          key={index}
          title={note.title}
          content={note.content}
          id={index}
          checkClick={checkId}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
