    
const todoData = (function(){
    const todoCreator = function(){
        const todoTitle = title();
        const todoDesc = description();
        const todoDate = dueDate();
        const todoPriority = prompt("How important?")
        const identifier = crypto.randomUUID();
        return {todoTitle,todoDate,todoDesc,todoPriority,identifier};
    }
    const title = function(){
        return prompt("What is the title of this?")
    }
    const description = function(){
        return prompt("What is the title of this?")
    }
    const dueDate = function(){
        //use date fns
        return prompt("What is the title of this?")
    }

    return{todoCreator,title,description,dueDate};
})();

export default todoData;