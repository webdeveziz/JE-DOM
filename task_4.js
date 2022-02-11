// Задание 4

const tasks = []

function errorTask(clas = '', node = '', text = '') { // Создает и если есть удаляет красный текст 
  if (clas) {
    const elm = document.querySelector(`.${clas}`)
    if (elm) {
      elm.remove()
    } else if (node && text) {
      const span = document.createElement(node)
      span.textContent = text
      span.classList.add(clas)
      const mainForm = document.querySelector('.create-task-block')
      mainForm.append(span)
    } else {
      return
    }
  }
}

function creatElem(nodeName, classes = '') { // для создания элемента
  const elem = document.createElement(nodeName)
  if (classes) {
    elem.classList.add(...classes)
  }
  return elem
}

function createAndOutToWindowTask(arr) {//создание задачи
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

createTaskBlock.addEventListener('submit', function (event) { // событие submit
  event.preventDefault()
  const text = event.target.taskName.value.trim()
  const filtr = tasks.filter((e) => text === e.text)

  if (text === '') {
    errorTask(
      'error-message-block',
      'span',
      'Название задачи не должно быть пустым'
    )
  } else if (filtr.length > 0) {
    errorTask(
      'error-message-block',
      'span',
      'Задача с таким названием уже существует.'
    )
  } else {
    errorTask('error-message-block')

    const task = {
      id: Date.now(),
      completed: false,
      text,
    }

    tasks.push(task)
    createAndOutToWindowTask(tasks)
  }
})
