document.getElementById("btn").addEventListener("click", function(){

    let task = document.getElementById("t").value;

    if(task.trim() === "") return;

    // Create container div
    let div = document.createElement("div");

    // Create span for task text
    let span = document.createElement("span");
    span.innerText = task;

    // Create delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    // Delete button action
    delBtn.addEventListener("click", function(){
        div.remove();   // removes that particular task
    });

    // Add span and button inside div
    div.appendChild(span);
    div.appendChild(delBtn);

    // Add div to output
    document.getElementById("o").appendChild(div);

    // Clear input field
    document.getElementById("t").value = "";
});
