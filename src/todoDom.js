import createTodo from "./createTodo.js";    

const todoDom = (function(){
    const renderTodo = function(todoObj, onCreate, onDelete){
        const body = document.querySelector(".container");
        body.innerHTML = "";

        for (const item of todoObj.items){
            createItemDom(todoObj, item, onDelete);
        }
        newItemButton(todoObj, onCreate);
    }

    const newItemButton = function(todoObj, onCreate){
        const body = document.querySelector(`.container`);
        const addNew = document.createElement("button");
        addNew.textContent = "+";
        addNew.classList.add("add-item");
        body.appendChild(addNew);
        addNew.addEventListener("click", (event) => { 
            createForm(todoObj, onCreate);
        });
    }

    const createItemDom = function(todoObj,newTodo, onDelete){
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
        deleteButt.addEventListener("click", (event) => { 
            onDelete(todoObj,newTodo);
        });
    }

    const deleteItemDom = function(identifier){
        alert(identifier);
        const del = document.querySelector(`.container [data-id="${identifier}"]`)
        if (del) del.remove();
    }

    const createForm = function(todoObj, onCreate){
        const body = document.querySelector(".container");
        const todoForm = document.createElement("form")

        const title = document.createElement("input")
        title.name = "title";
        todoForm.appendChild(title)

        const desc = document.createElement("input")
        desc.name = "description";
        todoForm.appendChild(desc)

        const dueDate = document.createElement("input")
        dueDate.name = "dueDate";
        dueDate.type = "date";
        todoForm.appendChild(dueDate);

        const options = ["Extra", "Somewhat", "Important"];
        options.forEach(option => {
            const priority = document.createElement("input")
            priority.name = "priority";
            priority.type = "radio"
            priority.value = option;
            priority.id =`radio-${option}`;

            const label = document.createElement("label");
            label.htmlFor = priority.id;
            label.textContent = option;

            todoForm.appendChild(priority);
            todoForm.appendChild(label);
        })

        const checkNum = document.createElement("input");
        checkNum.type = "number";
        checkNum.min = "0";
        todoForm.appendChild(checkNum);


        // checklist ai generated, will replace later.
        // container for generated checklist inputs
        const checklistContainer = document.createElement("div");
        todoForm.appendChild(checklistContainer);

        checkNum.addEventListener("input", () => {
            checklistContainer.innerHTML = ""; // clear previous inputs

            const count = parseInt(checkNum.value) || 0;

            for (let i = 0; i < count; i++) {
                const wrapper = document.createElement("div");

                const checkInput = document.createElement("input");
                checkInput.type = "text";
                checkInput.name = "checklist";
                checkInput.placeholder = `Checklist item ${i + 1}`;

                wrapper.appendChild(checkInput);
                checklistContainer.appendChild(wrapper);
            }
        });


        const confirm = document.createElement("button")
        confirm.type = "button"
        todoForm.appendChild(confirm);

        body.appendChild(todoForm);

        confirm.addEventListener("click", (event) => { 
            onCreate(todoObj,todoForm);
            todoForm.remove();
        });
    }

    return{createForm,newItemButton,createItemDom,renderTodo,deleteItemDom};
})();

export default todoDom;