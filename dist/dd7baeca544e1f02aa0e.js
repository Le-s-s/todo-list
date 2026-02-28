// todo
// basic script for calling other modules.
// module for dynamic creation of html
// modules connected to html creation that handle title/
// description/duedate/priority/notes/checklists.
// a seperate module for date handling.
// storage.

import createTodo from "./createTodo.js"

addEventListener("DOMContentLoaded", (event) => { 
    createTodo.createPage();
});