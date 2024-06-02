const inputBox = document.getElementById("input-box");
const list = document.getElementById("list");

function addTodo(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    dataSave();
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        dataSave();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); 
        dataSave();
    }
}, false);

function dataSave(){
    localStorage.setItem("data", list.innerHTML);
}

function showTodo(){
    list.innerHTML = localStorage.getItem("data");
}
showTodo();