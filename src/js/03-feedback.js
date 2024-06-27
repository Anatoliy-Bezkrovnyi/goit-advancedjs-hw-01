import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const email = document.querySelector(".feedback-form input");
const message = document.querySelector(".feedback-form textarea");
const FEEDBACK_FORM_KEY = "feedback-form-state";
const formData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY)) ?? {};


email.value = formData?.email ?? "";
message.value = formData?.message ?? "";


form.addEventListener("input", throttle(formInputHandler, 500));
form.addEventListener("submit", formSubmitHandler);

function formInputHandler() {    
    localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify({email: email.value, message: message.value}));
}
 
function formSubmitHandler(event) {
    event.preventDefault();
    const formData = {};
    const { email, message } = event.currentTarget.elements;
    formData.email = email.value;
    formData.message = message.value;    
    console.log(formData);
    form.reset();
    localStorage.removeItem(FEEDBACK_FORM_KEY);
}


