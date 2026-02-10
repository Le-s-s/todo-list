import createTab from "./createTab.js"
import "./style.css";
const page = (function(){
    const pageConstructor = function(){
        const webpage = document.querySelector(".container");
        webpage.innerHTML= "";
        defaultTab();
    }
    const defaultTab = function(){
        const navBar = document.querySelector(".nav-bar");
        const newTab = document.createElement("button");
        newTab.classList.add("New")
        newTab.textContent = "New";
        navBar.appendChild(newTab);
        newTab.addEventListener("click", () => {
            createTab.tabMaker();
        });
    }
    return{pageConstructor,defaultTab};
})();
export default page;