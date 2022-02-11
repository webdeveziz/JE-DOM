// Задание 2

const tasks = [
  {
    id: '1138465078061',
    completed: false,
    text: 'Посмотреть новый урок по JavaScript',
  },
  {
    id: '1138465078062',
    completed: false,
    text: 'Выполнить тест после урока',
  },
  {
    id: '1138465078063',
    completed: false,
    text: 'Выполнить ДЗ после урока',
  },
]

function creatElem(nodeName, classes = '') {
  const elem = document.createElement(nodeName)
  if (classes) {
    elem.classList.add(...classes)
  }
  return elem
}

const tasksList = document.querySelector('.tasks-list')

tasks.forEach((el) => {
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

  const button = creatElem('button', ['task-item__delete-button','default-button','delete-button',])
  button.textContent = 'Удалить'
  button.dataset.deleteTaskId = '5'

  form.append(input, label)
  taskItemMainContent.append(form, span)
  taskItemMainContainer.append(taskItemMainContent, button)
  taskItem.append(taskItemMainContainer)

  tasksList.insertAdjacentElement('beforeend', taskItem)
})
