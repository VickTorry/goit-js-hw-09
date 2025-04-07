"use strict"

const form = document.querySelector(".feedback-form");
const localStorageKey  = "feedback-form-state";
const formData = JSON.parse(localStorage.getItem(localStorageKey)) || { email: "", message: "" };

form.elements.email.value = (formData.email && formData.email.trim()) || "";
form.elements.message.value = (formData.message && formData.message.trim()) || "";


form.addEventListener('input', handleInput);

function handleInput(event) {
    formData[event.target.name] = event.target.value; 
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    if (!formData.email.trim() || !formData.message.trim()) {
        alert("Fill please all fields"); 
        return;
    };

        console.log("Form submitted:", formData);
    localStorage.removeItem(localStorageKey);
  form.reset();
   Object.assign(formData, { email: "", message: "" }); 
}