import todo from "./createTodo.js";

const tab = (function(){
    const tabMaker = function(){
        const name = tabName();
        alert(name);
        const tab = createTab(name);
    }
    const tabName = function(){
        const name = prompt("What will you call this tab?")
        return name;
    }
    const createTab = function(name){
        const nav = document.querySelector(".nav-bar");
        const newTab = nav.querySelector(".new");
        const tab = document.createElement("button");
        tab.classList.add(`${name}`)
        tab.textContent = name;
        nav.insertBefore(tab, newTab);
        todo.createTodo(name);
        tab.addEventListener("click", (event) => { 
            todo.createTodo(name);
        });
        //todo.makeList();
        // add todo list function here, 
        // to dynamically create a new json list as well as the ability to 
        // add individual notes, and all that jazz.
    }
    return{tabMaker,tabName,createTab};
})();
export default tab;