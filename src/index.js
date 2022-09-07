document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitTarget = document.getElementById(['new-task-description']);
    createToDo(e.target['new-task-description'].value);
    form.reset();
  })
});

function createToDo(todo) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.textContent = 'x';
  btn.addEventListener('click', deleteToDo);
  li.textContent = `${todo}  `;
  li.appendChild(btn);
  document.getElementById('tasks').appendChild(li)

}

function deleteToDo(e) {
  e.target.parentNode.remove();
}