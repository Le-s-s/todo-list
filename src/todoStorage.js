const todoStorage = (function(){
    const storageKey = (name) => `todo:${name}`;
    class todoTab {
        constructor(name, items = []){
            this.name = name;
            this.items = items;
            this.deleted = false;
            }
    }

    // object manipulation and storage

    const objectCreator = function(name){
        const key = storageKey(name);
        
        const exists = localStorage.getItem(key);
        let todoObj;
        
        if(exists === null){
            todoObj = new todoTab(name, []);
            localStorage.setItem(key, JSON.stringify(todoObj));
        } else {
            todoObj = objectLoader(name);
        }
        return todoObj;
    }

    const objectLoader = function(name)
    {
        const key = storageKey(name);
        const exists = localStorage.getItem(key);
        let todoObj = null;

        if(exists !== null) {
            const parsed = JSON.parse(exists);
            todoObj = new todoTab(parsed.name, parsed.items);
            
            
        }
        alert(todoObj)
        return todoObj;

        
    }
    const objectRemover = function(name){
        alert(name)
        const key = storageKey(name);
        localStorage.removeItem(key);
    };


    // todo object handling, works as intended
    const createItemObject = function(todoObj,todoForm){

        const title = todoForm.title.value;

        const description = todoForm.description.value;

        const dueDate = todoForm.dueDate.value;

        const priority = todoForm.priority.value;

        const identifier = crypto.randomUUID();

        const checklistDom = todoForm.querySelectorAll(".checklist")

        // converts checklist dom into array object
        const checklist = Array.from(checklistDom)
        .map(node => node.value.trim())
        .filter(value => value !== "")
        .map(value => ({
            value,
            completed: false
        }));


        const newTodo = {title,description,dueDate,priority,identifier,checklist};

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

    return {todoTab,objectCreator,objectLoader,objectRemover,createItemObject,deleteItemObject,saveTodo};
})();

export default todoStorage;