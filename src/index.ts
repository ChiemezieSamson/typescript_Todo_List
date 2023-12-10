const mian = document.querySelector("main") as HTMLElement
const Form = document.createElement("form")
const Input = document.createElement("input")
const Button = document.createElement("button")
const UnodOredList = document.createElement("ul")

Input.id = "todo_input"
Input.name = "todo_input"
Input.type = "text"
Button.type = "button"
Button.id = "Add_todo"
Button.textContent = "Add"

Form.append(Input, Button)

mian.append(Form, UnodOredList)

const input = document.querySelector("input") as HTMLInputElement
const button = document.querySelector("#Add_todo") as HTMLButtonElement
const unodOredList = document.querySelector("ul") as HTMLOListElement

type value = string

Button.addEventListener("click", (): void => {
  const newElement = document.createElement("li")
  const wrapper = document.createElement("span")
  const Delete = document.createElement("button")
  const Update = document.createElement("button")

  wrapper.classList.add("wrapper")
  const newValue: value = input.value

  if (newValue) {
    Delete.textContent = "Delete"
    Update.textContent = "update"

    newElement.textContent = newValue
    wrapper.append(Update, Delete)
    newElement.append(wrapper)

    unodOredList.appendChild(newElement)
  }

  input.value = ""
})