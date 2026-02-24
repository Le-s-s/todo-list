const todoStorage = (function(){
    const storageKey = (name) => `todo:${name}`;
    const tabs = {active: null, lists: []};
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

        return todoObj;

        
    }
    const objectRemover = function(name){
        const key = storageKey(name);
        alert(key)
        localStorage.removeItem(key);
        alert(localStorage.getItem(key));

    };

    const createItemObject = function(todoObj,todoForm){

        const title = todoForm.title.value;

        const description = todoForm.description.value;

        const dueDate = todoForm.dueDate.value;

        const priority = todoForm.priority.value;

        const identifier = crypto.randomUUID();

        const checklistDom = todoForm.querySelectorAll(".checklist")

        // ai, will make my own later.
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
        tabHandler(todoObj);
        const key = storageKey(todoObj.name);
        localStorage.setItem(key, JSON.stringify(todoObj));
    }


        
        // plan
        // when a todoobj is saved
        // put it in an array of tabs
        // auto load all in tabs when site loads.
    const tabHandler = function(todoObj){

        const index = tabs.lists.findIndex(
            obj => obj.name === todoObj.name
        );

        if (index !== -1){
            tabs.lists[index] = todoObj;
        } else {
            tabs.lists.push(todoObj);
        }
        return todoObj;
    };

    const loadTabs = function(){
        tabs.lists.length = 0;

        Object.keys(localStorage).forEach(key => {
            
            if(key.startsWith("todo:")){
                alert(key)
                const parsed = JSON.parse(localStorage.getItem(key));
                tabs.lists.push(new todoTab(parsed.name, parsed.items));
            }
        });
    };

    const deleteTabs = function(name){
                // remove from runtime state
        tabs.lists = tabs.lists.filter(
            obj => obj.name !== name
        );
    }

    return {todoTab,objectCreator,objectLoader,objectRemover,createItemObject,deleteItemObject,saveTodo,tabHandler,loadTabs,tabs, deleteTabs};
})();

export default todoStorage;