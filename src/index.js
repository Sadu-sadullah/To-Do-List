import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//INSTRUCTIONS:
//1. Implement the add note functionality.
// - Create a const which keeps track of the title and the content
// - Pass the new task back to the app comp
// - Add the new task to an array
// - From this array, render separate task elements

//2. Implement the delete note functionality.
// - Call from note that triggers delete function
// - Usage of filter method to delete those tasks
