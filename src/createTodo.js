import todoStorage from "./todoStorage.js";
import todoDom from "./todoDom.js";

//localStorage.clear()
const todoHandler = (function(){
    // tab variable should be moved 
    // but will it?
    // probably not.
    let currentTab
    
    // populates page with data
    // or creates default tab
    const createPage = function() {
        currentTab = localStorage.getItem("activeTab");
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

            
            if (data && data.name) {
                tabNames.push(data.name);
                todoDom.createTab(data.name, createTodo, deleteTodo);
            }
        });

        currentTab = currentTab || tabNames[0];
        createTodo(currentTab);
    };

    const createTodo = function(name){
        currentTab = name;
        let todoObj = todoStorage.objectHandler(name);
        todoDom.renderTodo(todoObj, createItems, deleteItems, todoStorage.saveTodo);
    };
    
    const createItems = function(todoObj,todoForm){
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
// simplify code
// add proper comments.
// add more styling
// add more safeguards


export default todoHandler;