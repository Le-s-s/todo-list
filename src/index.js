// todo
// basic script for calling other modules.
// module for dynamic creation of html
// modules connected to html creation that handle title/
// description/duedate/priority/notes/checklists.
// a seperate module for date handling.
// storage.

import createPage from "./createPage.js"

addEventListener("DOMContentLoaded", (event) => { 
    createPage.pageConstructor();
});