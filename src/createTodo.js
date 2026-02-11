import todoStorage from "./todoStorage.js";
import todoDom from "./todoDom.js";

const todo = (function(){
    const storageKey = (name) => `todo:${name}`;
    
    class todoTab {
        constructor(name, items = []){
            this.name = name;
            this.items = items;
            }
    }
    const createTodo = function(name){
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
        renderTodo(todoObj)
        return todoObj;
        
    }

    const renderTodo = function(todoObj){
        const body = document.querySelector(".container");
        body.innerHTML = "";
        for (const item of todoObj.items){
            createItemDom(todoObj,item);
        }
        newItemButton(todoObj);
    }

    const newItemButton = function(todoObj){
        const body = document.querySelector(`.container`);
        const addNew = document.createElement("button");
        addNew.textContent = "+";
        addNew.classList.add("add-item");
        body.appendChild(addNew);

        addNew.addEventListener("click", (event) => { 
            const item = createItemObject(todoObj);
            alert(item.identifier)
        });
    }

    const createItemObject = function(todoObj){
        const title = prompt("Title");
        const description = prompt("What do you have to do?")
        const dueDate = prompt("When is it due?")
        const priority = prompt("How important?")
        const identifier = crypto.randomUUID();
        const newTodo = {title,description,dueDate,priority,identifier};
        todoObj.items.push(newTodo)
        createItemDom(todoObj,newTodo);
        saveTodo(todoObj);
        return newTodo;
    }

    const createItemDom = function(todoObj,newTodo){
        const body = document.querySelector(`.container`);
        const card = document.createElement("div");
        const title = document.createElement("h2");
        title.textContent = `${newTodo.title}`;
        card.appendChild(title)
        const description = document.createElement("p");
        card.appendChild(description)
        description.textContent = `${newTodo.description}`;
        const dueDate = document.createElement("h3");
        card.appendChild(dueDate)
        dueDate.textContent = `${newTodo.dueDate}`;
        const priority = document.createElement("h1");
        card.appendChild(priority)
        priority.textContent = `${newTodo.priority}`;
        const notes = document.createElement("input");
        card.appendChild(notes)
        const deleteButt = document.createElement("button");
        deleteButt.textContent = `X`;
        card.appendChild(deleteButt)
        card.dataset.id = newTodo.identifier;
        body.appendChild(card);

        deleteButt.addEventListener("click", (event) => { 
            deleteItemObject(todoObj,newTodo);
        });
    }

    const deleteItemObject = function(todoObj, newTodo) {
        for(const obj of todoObj.items){
            if(obj.identifier === newTodo.identifier){
                const index = todoObj.items.indexOf(obj);
                todoObj.items.splice(index,1);
                deleteItemDom(obj.identifier);
                saveTodo(todoObj);
                break;
            }
        }
        
    }

    const deleteItemDom = function(identifier){
        alert(identifier);
        const del = document.querySelector(`.container [data-id="${identifier}"]`)
        if (del) del.remove();
    }


    const saveTodo = function(todoObj){
        const key = storageKey(todoObj.name);
        localStorage.setItem(key, JSON.stringify(todoObj));
    }

    return{todoTab, createTodo,saveTodo,newItemButton,createItemObject,createItemDom,renderTodo};
})();


export default todo;