document.querySelector("#push").addEventListener("click", function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please add a task");
  } else {
    document.querySelector("#tasks").setAttribute("style", "display: block;");
    document.querySelector("#tasks").innerHTML += `
    <div class="task">
    <span id="taskname">
    ${document.querySelector("#newtask input").value}
    </span>
    <button class="delete">
    <i class="fa fa-trash"></i></button>
    </div>`;

    var current_tasks = document.querySelectorAll(".delete");

    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
        if (document.querySelectorAll(".task").length === 0) {
          document
            .querySelector("#tasks")
            .setAttribute("style", "display: none;");
        }
      };
    }
    var tasks = document.querySelectorAll(".task");
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }
    document.querySelector("#newtask input").value = "";
  }
});
