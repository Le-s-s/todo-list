import todoStorage from "./todoStorage.js";
import todoDom from "./todoDom.js";

//localStorage.clear()
const todoHandler = (function(){
    const createPage = function() {

        const todoKeys = Object.keys(localStorage)
            .filter(key => key.startsWith("todo:"));

        if (todoKeys.length === 0) {
            createTodo("Default");
            todoDom.createTab("Default", createTodo, deleteTodo);
            return;
        }
        const tabNames = [];

        todoKeys.forEach(key => {
            const data = JSON.parse(localStorage.getItem(key));

            // ensure it's actually a todo tab
            if (data && data.name) {
                tabNames.push(data.name);
                todoDom.createTab(data.name, createTodo, deleteTodo);
            }
        });

        // render first tab once
        createTodo(tabNames[0]);
    };

    const createTodo = function(name){
        // Try to load first
        let todoObj = todoStorage.objectLoader(name);
        alert(todoObj)

        // If not found, create it
        if(todoObj === null){
            todoObj = todoStorage.objectCreator(name);
        }

        // Now render
        todoDom.renderTodo(todoObj, createItems, deleteItems, todoStorage.saveTodo);
    };
    
    const createItems = function(todoObj,todoForm){
        alert(todoForm.description.value)
        const newTodo = todoStorage.createItemObject(todoObj,todoForm)
        todoDom.createItemDom(todoObj, newTodo, deleteItems, todoStorage.saveTodo);
    }

    const deleteTodo = function(name){
        todoStorage.objectRemover(name);
             
    }

    const deleteItems = function(todoObj,newTodo){
        todoStorage.deleteItemObject(todoObj,newTodo);
        todoDom.deleteItemDom(newTodo.identifier);
    }
    return{createTodo,deleteTodo,createItems,deleteItems,createPage}
})();

//todo
// convert tabs to localstorage to avoid brain cancer
// make tab deletion actually delete localstorage.
// add active tab handling
// add styling(basic)


export default todoHandler;