import todoStorage from "./todoStorage.js";
import todoDom from "./todoDom.js";

//localStorage.clear()
const todoHandler = (function(){
    const tabs = todoStorage.tabs.lists;
    const createPage = function(){
        todoStorage.loadTabs();
        

        if (tabs.length === 0){
            createTodo("Default"); // ONLY here
            todoDom.createTab("Default", createTodo, tabs, deleteTodo);
            
        } else {  
            currentTabs();
            createTodo(tabs[0].name);
        }
    };

    const currentTabs = function(){
        for(const obj of tabs){
            todoDom.createTab(obj.name, createTodo,tabs,deleteTodo);
        }
    }

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
        todoStorage.deleteTabs(name)
        //todoDom.renderTodo(todoObj,createItems,deleteItems, todoStorage.saveTodo);        
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