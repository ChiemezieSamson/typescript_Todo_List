"use strict";
const mian = document.querySelector("main");
const Form = document.createElement("form");
const Input = document.createElement("input");
const Button = document.createElement("button");
const UnodOredList = document.createElement("ul");
Input.id = "todo_input";
Input.name = "todo_input";
Input.type = "text";
Button.type = "button";
Button.id = "Add_todo";
Button.textContent = "Add";
Form.append(Input, Button);
mian.append(Form, UnodOredList);
const input = document.querySelector("input");
const button = document.querySelector("#Add_todo");
const unodOredList = document.querySelector("ul");
Button.addEventListener("click", () => {
    const newElement = document.createElement("li");
    const wrapper = document.createElement("span");
    const Delete = document.createElement("button");
    const Update = document.createElement("button");
    wrapper.classList.add("wrapper");
    const newValue = input.value;
    if (newValue) {
        Delete.textContent = "Delete";
        Update.textContent = "update";
        newElement.textContent = newValue;
        wrapper.append(Update, Delete);
        newElement.append(wrapper);
        unodOredList.appendChild(newElement);
    }
    input.value = "";
});
