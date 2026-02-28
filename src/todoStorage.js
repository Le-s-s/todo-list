const todoStorage = (function(){

    const storageKey = (name) => `todo:${name}`;
    class todoTab {
        constructor(name, items = []){
            this.name = name;
            this.items = items;
            }
    }

    // object manipulation and storage

    const objectHandler = function(name){
        let todoObj = objectLoader(name);

        if(todoObj === null){
            todoObj = objectCreator(name);
        }

        localStorage.setItem("activeTab", name);
        saveTodo(todoObj);
        return todoObj
    }
    
    const objectCreator = function(name){
        let todoObj;
        todoObj = new todoTab(name, []);
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
        
        return todoObj;

        
    }

    const objectRemover = function(name){    
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

    return {todoTab,objectHandler,objectCreator,objectLoader,objectRemover,createItemObject,deleteItemObject,saveTodo};
})();

export default todoStorage;