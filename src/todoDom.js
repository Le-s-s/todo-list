import { format, addDays, formatDate } from 'date-fns';
import "./style.css";
const todoDom = (function(){
    const body = document.querySelector(".container");
    const renderTodo = function(todoObj, onCreate, onDelete,saveTodo){
        if(todoObj === null){
            body.innerHTML = "";
            newItemButton(todoObj, onCreate);          
        }
        body.innerHTML = "";
        newItemButton(todoObj, onCreate);
        for (const item of todoObj.items){
            createItemDom(todoObj, item, onDelete, saveTodo);
        }
        
    }

    const newItemButton = function(todoObj, onCreate){
        const addNew = document.createElement("button");
        addNew.textContent = "+";
        addNew.classList.add("add-item");
        body.appendChild(addNew);
        addNew.addEventListener("click", (event) => { 
            createForm(todoObj, onCreate);
        });
    }

    const createItemDom = function(todoObj, newTodo, onDelete, saveTodo){
        const card = document.createElement("div");
        card.classList.add(`${newTodo.priority}`);
        const title = document.createElement("h2");
        title.textContent = `${newTodo.title}`;
        card.appendChild(title)

        const details = document.createElement("div");
        details.classList.add("card-details");
        card.appendChild(details);

        const description = document.createElement("p");
        card.appendChild(description)

        description.textContent = `${newTodo.description}`;
        const dueDate = document.createElement("h3");
        card.appendChild(dueDate)

        dueDate.textContent = `${newTodo.dueDate}`;
        const priority = document.createElement("h1");
        card.appendChild(priority)
        priority.textContent = `${newTodo.priority}`;
        

        // creates list of checkable list items
        if (Array.isArray(newTodo.checklist)) {
            newTodo.checklist.forEach(element => {
                const checkMark = document.createElement("input");
                checkMark.type = "checkbox";
                checkMark.checked = element.completed;

                const checkItem = document.createElement("p");
                checkItem.textContent = element.value;
                checkItem.appendChild(checkMark);

                card.appendChild(checkItem);
                details.appendChild(checkItem);
                
                checkMark.addEventListener("change", (event) => { 
                    element.completed = checkMark.checked;
                    saveTodo(todoObj);
                });
            });
        }

        const deleteButt = document.createElement("button");
        deleteButt.textContent = `X`;
        deleteButt.classList.add("delete-item")
        card.appendChild(deleteButt)
        card.classList.add("card")
        card.dataset.id = newTodo.identifier;
        body.appendChild(card);
        details.appendChild(description);
        details.appendChild(dueDate);
        details.appendChild(priority);
        details.appendChild(deleteButt);

        title.addEventListener("click", () => {
            card.classList.toggle("expanded");
        });

        deleteButt.addEventListener("click", (event) => { 
            onDelete(todoObj,newTodo);
        });
    }

    const deleteItemDom = function(identifier){
        const del = document.querySelector(`.container [data-id="${identifier}"]`)
        if (del) del.remove();
    }

    const createForm = function(todoObj, onCreate){
        const todoForm = document.createElement("form")

        const title = document.createElement("input")
        title.name = "title";
        title.setAttribute("placeholder", "Enter title.")
        title.defaultValue = "Todo"
        todoForm.appendChild(title)


        const desc = document.createElement("input")
        desc.name = "description";
        desc.defaultValue = "Things to do"
        desc.setAttribute("placeholder", "Enter description.")
        todoForm.appendChild(desc)


        const dueDate = document.createElement("input")
        dueDate.name = "dueDate";
        dueDate.type = "date";
        
        const today = new Date();
        const tomorrow = addDays(today, 1);
        const formatted = formatDate(tomorrow, "yyyy-MM-dd");

        dueDate.defaultValue = formatted
        dueDate.setAttribute("placeholder", "Enter title.")
        todoForm.appendChild(dueDate);

        const prioritySection = document.createElement("div")
        prioritySection.classList.add("priority-section")

        const priorityHeader = document.createElement("h3")
        priorityHeader.textContent = "How important is this task?"
        prioritySection.appendChild(priorityHeader);

        const priorityOptions = document.createElement("div")
        priorityOptions.classList.add("prority-radio")

        const options = ["Important", "Somewhat", "Not"];
        options.forEach(option => {
            const priority = document.createElement("input")
            priority.name = "priority";
            priority.type = "radio"
            priority.value = option;
            priority.id =`radio-${option}`;
            priority.class = `priority${option}`
            priority.checked = true
            priority.required = true;

            const label = document.createElement("label");
            label.htmlFor = priority.id;
            label.textContent = option;

            priorityOptions.appendChild(label);
            priorityOptions.appendChild(priority);
        })

        prioritySection.appendChild(priorityOptions)

        todoForm.appendChild(prioritySection)

        const checklistSelector = document.createElement("div")
        checklistSelector.classList.add("checklist-selector")

        const checkNum = document.createElement("input");
        checkNum.type = "range";
        checkNum.min = "0";
        checkNum.max = "10"
        checkNum.value = "0"
        checkNum.id = "number-range"

        const checklistHeader = document.createElement("h4");
        checklistHeader.textContent = `Checklist slider.`;
        checklistSelector.appendChild(checklistHeader);
        checklistSelector.appendChild(checkNum);

        todoForm.appendChild(checklistSelector)

        // container for generated checklist inputs
        const checklistContainer = document.createElement("div");
        checklistSelector.appendChild(checklistContainer);

        checkNum.addEventListener("input", () => {
            checklistContainer.innerHTML = "";

            const count = parseInt(checkNum.value) || 0;

            for (let i = 0; i < count; i++) {
                const wrapper = document.createElement("div");

                const checkInput = document.createElement("input");
                checkInput.type = "text";
                checkInput.name = "checklist";
                checkInput.classList.add("checklist");
                checkInput.placeholder = `Checklist item ${i + 1}`;

                wrapper.appendChild(checkInput);
                checklistContainer.appendChild(wrapper);
            }
        });

        const confirm = document.createElement("button")
        confirm.textContent = "Submit"
        confirm.type = "button"
        todoForm.appendChild(confirm);

        body.appendChild(todoForm);

        confirm.addEventListener("click", (event) => { 
            onCreate(todoObj,todoForm);
            todoForm.remove();
        });
    }

   
    // tab logic
    const tabMaker = function(createTodo,deleteTodo){
        const name = tabName();
        createTab(name,createTodo,deleteTodo);
    }
    
    const tabName = function(){

        let name;

        while (true) {
            name = prompt("What will you call this tab?");
            const tabs = [];
            if (!name) return null;

            name = name.trim();

            Object.keys(localStorage).forEach(key => {
                tabs.push(key)
            });
            const exists = tabs.some(
                tab => tab === `todo:${name}`
            );

            if (!exists){
                
                break
            } else {
                alert("This tab exists")
            };



            
        }

        return name;
    };

    const createTab = function(name,createTodo, deleteTodo){
        if(name === null) return;
        const nav = document.querySelector(".nav-bar");
        if(name === "Default"){
            const newTab = document.createElement("button");
            newTab.classList.add("new")
            newTab.textContent = "+";
            nav.appendChild(newTab);
            newTab.addEventListener("click", () => {
                tabMaker(createTodo,deleteTodo);
            });
        }
        const newTab = nav.querySelector(".new");
        const del = document.createElement("button");
        del.classList.add(`delTab`)
        del.textContent = "x";

        const tab = document.createElement("button");
        tab.classList.add("tab")
        tab.classList.add(`${name}`)
        tab.textContent = name;
        tab.appendChild(del)

        nav.insertBefore(tab, newTab);

        del.addEventListener("click", (event) => { 
            event.stopPropagation()
            tab.remove()
            deleteTodo(name);
        });

        tab.addEventListener("click", (event) => { 
            createTodo(name);
        });
    }

    return{createForm,newItemButton,createItemDom,renderTodo,deleteItemDom,tabMaker,tabName,createTab};
})();

export default todoDom;