const textArea = document.getElementById("text-area");

function addTask() {
    if (textArea.value != "") {
        let tasks = document.querySelector("ul");
        let li = document.createElement("li");
        const btn = document.createElement("button");
        btn.textContent = "X";

        btn.addEventListener("click", ()=> {
            li.remove();
        })

        li.addEventListener("click", ()=> {
            if (li.style.textDecoration === "line-through") {
                li.style.background = "white";
                li.style.textDecoration = "none";
            }else{
                li.style.background = "#CAE7B9";
                li.style.textDecoration = "line-through";
            }
        })

        li.textContent = textArea.value;
        tasks.appendChild(li);
        li.appendChild(btn);
        textArea.value = "";
    }

}
