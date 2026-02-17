import todoData from "./todoData.js";    

const todoStorage = (function(){
    const storageKey = (name) => `todo:${name}`;
    
    class todoTab {
        constructor(name, items = []){
            this.name = name;
            this.items = items;
            }
    }
    const objectCreator = function(name){
        const key = storageKey(name);
        const exists = localStorage.getItem(key);
        let todoObj;
        
        if(exists === null){
            todoObj = new todoTab(name, []);
            localStorage.setItem(key, JSON.stringify(todoObj));
        } else {
            const parsed = JSON.parse(exists);
            todoObj = new todoTab(parsed.name, parsed.items);
        }
        return todoObj;
        
    }
    const createItemObject = function(todoObj,todoForm){
        const title = todoForm.title.value;
        const description = todoForm.description.value;
        const dueDate = todoForm.dueDate.value;
        const priority = todoForm.priority.value;
        const identifier = crypto.randomUUID();
        const newTodo = {title,description,dueDate,priority,identifier};
        todoObj.items.push(newTodo)
        saveTodo(todoObj);
        return newTodo;
    }
    const deleteItemObject = function(todoObj, newTodo) {
        for(const obj of todoObj.items){
            if(obj.identifier === newTodo.identifier){
                const index = todoObj.items.indexOf(obj);
                todoObj.items.splice(index,1);
                saveTodo(todoObj);
            }
        }
        
    }
    const saveTodo = function(todoObj){
        const key = storageKey(todoObj.name);
        localStorage.setItem(key, JSON.stringify(todoObj));
    }
    return{todoTab,objectCreator,createItemObject,deleteItemObject};
})();

export default todoStorage;