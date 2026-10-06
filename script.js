document.getElementById('searchInput').addEventListener('input', function(e) {
  let filter = e.target.value.toLowerCase();
  let tasks = document.querySelectorAll('.task-item');
  tasks.forEach(function(task) {
    if(task.textContent.toLowerCase().includes(filter)) {
      task.style.display = "";
    } else {
      task.style.display = "none";
    }
  });
});