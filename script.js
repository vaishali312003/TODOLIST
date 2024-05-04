const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container")
function addTask(){
    if(inputBox.value === ''){
        alert("You must Write Something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";//input BOx value will emptied now after adding your text
    saveData();//save the upadted content after addingtext
}
listContainer.addEventListener("click",function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
}else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();

}

},false);
function saveData(){
    localStorage.saveItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();