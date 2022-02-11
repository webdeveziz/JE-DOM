// Задание 1

/******          Спососб с innerHTML     ***********/

// document.body.innerHTML = `
// <form class="create-user-form">
//   <label>
//     Имя
//     <input type="text" name="userName" placeholder="Введите ваше имя" />
//   </label>
//   <label>
//     Пароль
//     <input
//       type="password"
//       name="password"
//       placeholder="Придумайте Пароль"
//     />
//   </label>
//   <button type="submit">Подтвердить</button>
// </form>
// `

/******          Спососб с createElement     ***********/

function crEl(
  nodeName,
  classes = '',
  typik = '',
  namik = '',
  placehol = '',
  textCont = ''
) {
  const elem = document.createElement(nodeName)
  if (classes) {
    elem.className = classes
  }
  if (typik) {
    elem.type = typik
  }
  if (namik) {
    elem.name = namik
  }
  if (placehol) {
    elem.placeholder = placehol
  }
  if (textCont) {
    elem.textContent = textCont
  }
  return elem
}

const _ = undefined
const form = crEl('form', 'create-user-form')

const input1 = crEl('input', _, 'text', 'userName', 'Введите ваше имя')
const label1 = crEl('label', _, _, _, _, ' Имя ')
label1.insertAdjacentElement('beforeend', input1)

const input2 = crEl('input', _, 'password', 'password', 'Придумайте Пароль')
const label2 = crEl('label', _, _, _, _, ' Пароль ')
label2.insertAdjacentElement('beforeend', input2)

const button = crEl('button', _, 'submit', _, _, 'Подтвердить')
form.append(label1, label2, button)

document.body.insertAdjacentElement('afterbegin', form)
