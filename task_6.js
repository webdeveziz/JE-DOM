// Задание 6

let isLight = false

function theme() {
  const body = document.body
  const taskItems = document.querySelectorAll('.task-item')
  const buttons = document.querySelectorAll('button')
  const img = document.querySelector('.image')

  if(isLight){
    body.style.background = 'initial'
    taskItems.forEach(elem=>{
      elem.style.color = 'initial'
    })
    buttons.forEach(elem=>{
      elem.style.border = 'none'
    })
    img.src = 'moon.png'
    isLight = !isLight
  } else {
    body.style.background = '#24292E'
    taskItems.forEach(elem=>{
      elem.style.color = '#ffffff'
    })
    buttons.forEach(elem=>{
      elem.style.border = '1px solid #ffffff'
    })
    img.src = 'sun.png'
    isLight = !isLight
  }
}

document.addEventListener('keydown', (event) => {
  if(event.key === 'Tab') theme() 
})



// Дополнительно, для себя
document.querySelector('.image').addEventListener('click', theme)