import todoStorage from "./todoStorage.js";
import todoDom from "./todoDom.js";

const todoHandler = (function(){
    const createPage = function(){
        todoDom.pageConstructor(createTodo)
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