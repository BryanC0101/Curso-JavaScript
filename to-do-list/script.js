const textArea = document.getElementById("text-area");

function addTask() {
    if (textArea.value != "") {
        let tasks = document.querySelector("ul");
        let li = document.createElement("li");
        li.textContent = textArea.value;
        tasks.appendChild(li);
        textArea.value = "";
    }

}