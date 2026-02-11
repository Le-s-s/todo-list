    
const todoDom = (function(){
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
        return todoObj;

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
        deleteButt.classList.add("delete-item")
        card.appendChild(deleteButt)
        card.dataset.id = newTodo.identifier;
        body.appendChild(card);

        return todoObj;
    }

    const deleteItemDom = function(identifier){
        alert(identifier);
        const del = document.querySelector(`.container [data-id="${identifier}"]`)
        if (del) del.remove();
    }
    return{newItemButton,createItemDom,renderTodo,deleteItemDom};
})();

export default todoDom;