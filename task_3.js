// Задание 3

const tasks = []

function creatElem(nodeName, classes = '') {
  const elem = document.createElement(nodeName)
  if (classes) {
    elem.classList.add(...classes)
  }
  return elem
}

function createAndOutToWindowTask(arr) {
  const el = arr[arr.length - 1]

  const tasksList = document.querySelector('.tasks-list')

  const taskItem = creatElem('div', ['task-item'])
  taskItem.dataset.taskId = el.id

  const taskItemMainContainer = creatElem('div', ['task-item__main-container'])

  const taskItemMainContent = creatElem('div', ['task-item__main-content'])

  const form = creatElem('form', ['checkbox-form'])

  const input = creatElem('input', ['checkbox-form__checkbox'])
  input.type = 'checkbox'
  input.id = el.id

  const label = creatElem('label')
  label.htmlFor = el.id

  const span = creatElem('span', ['task-item__text'])
  span.textContent = el.text

  const button = creatElem('button', [
    'task-item__delete-button',
    'default-button',
    'delete-button',
  ])
  button.textContent = 'Удалить'
  button.dataset.deleteTaskId = '5'

  form.append(input, label)
  taskItemMainContent.append(form, span)
  taskItemMainContainer.append(taskItemMainContent, button)
  taskItem.append(taskItemMainContainer)

  tasksList.insertAdjacentElement('beforeend', taskItem)
}

const createTaskBlock = document.querySelector('.create-task-block')
createTaskBlock.addEventListener('submit', function (event) {
  event.preventDefault()

  const task = {
    id: Date.now(),
    completed: false,
    text: event.target.taskName.value,
  }

  tasks.push(task)

  createAndOutToWindowTask(tasks)
})
