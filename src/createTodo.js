import todoStorage from "./todoStorage.js";
import todoDom from "./todoDom.js";

const todoHandler = (function(){
    const createPage = function(){
        todoStorage.loadTabs();
        const tabs = todoStorage.tabs.lists;

        if (tabs.length === 0){
            createTodo("Default"); // ONLY here
            todoDom.createTab("Default", createTodo);
        } else {
            currentTabs();
            createTodo(tabs[0].name);
        }
    };

    const currentTabs = function(){
        const tabs = todoStorage.tabs.lists;

        for(const obj of tabs){
            todoDom.createTab(obj.name, createTodo,tabs);
        }
    }

    const createTodo = function(name){
        const todoObj = todoStorage.objectCreator(name);
        todoDom.renderTodo(todoObj,createItems,deleteItems, todoStorage.saveTodo);        
    }
    const createItems = function(todoObj,todoForm){
        alert(todoForm.description.value)
        const newTodo = todoStorage.createItemObject(todoObj,todoForm)
        todoDom.createItemDom(todoObj, newTodo, deleteItems, todoStorage.saveTodo);
    }
    const deleteItems = function(todoObj,newTodo){
        todoStorage.deleteItemObject(todoObj,newTodo);
        todoDom.deleteItemDom(newTodo.identifier);
    }
    return{createTodo,createItems,deleteItems,createPage}
})();


export default todoHandler;