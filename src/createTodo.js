import todoStorage from "./todoStorage.js";
import todoDom from "./todoDom.js";

const todoHandler = (function(){
    const createTodo = function(name){
        
        const todoObj = todoStorage.objectCreator(name);

        todoDom.renderTodo(todoObj)

        const addButton = document.querySelector(`.add-item`)
        addButton.addEventListener("click", (event) => { 
            createItems(todoObj)
        });
        
    }
    const createItems = function(todoObj){
        const newTodo = todoStorage.createItemObject(todoObj)
        alert(todoObj,newTodo)
        todoDom.createItemDom(todoObj, newTodo);
        let deleteButt = document.querySelector(`[data-id="${newTodo.identifier}"] .delete-item`)
        deleteButt.addEventListener("click", (event) => { 
            deleteItems(todoObj,newTodo);
        });
    }
    const deleteItems = function(todoObj,newTodo){
        todoStorage.deleteItemObject(todoObj,newTodo);
        todoDom.deleteItemDom(newTodo.identifier);
    }
    return{createTodo}
})();


export default todoHandler;