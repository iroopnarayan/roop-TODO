const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function AddTask() {
  if (inputBox.value === "") {
    alert("You should write something");
  } else {
    let li = document.createElement("li");
    li.style.borderBottom="1.5 solid gray";
    li.innerText = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerText = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  storeTodo();
}

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        storeTodo();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        storeTodo();
    }
},false);

function storeTodo(){
    localStorage.setItem("data",listContainer.innerHTML);
}


function showTodo(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTodo();