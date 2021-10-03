"use strict";

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var closeButton = document.getElementById("close");
var submit = document.getElementById("submit");
var popup = document.getElementById('popup');
var popupContent = document.getElementById('popup-content');
var email = document.getElementById("email");
const regEmail = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
var validationError = false;

function displayNone(object) {
    object.style.display = "none";
}

function closeModalButton() {
    closeButton.addEventListener('click', function (event) {
        displayNone(modal);
    });
}

function closeModal() {
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            displayNone(modal);
        }
    });
}

function closePopup() {
    displayNone(popup);
}

function openModal() {
    modal.style.display = "block";
    closeModal();
    closeModalButton();
    submitButton();
}

function customValidation() {
    let inputs = document.querySelectorAll('.form-input');
    validationError = false;
    for (let element of inputs) {
        document.getElementById(element.id + '-span').textContent = '';
        if (element.value.trim() == '') {
            document.getElementById(element.id + '-span').textContent = 'Fill this field';
            validationError = true;
        }
    }
    if (!email.value.trim() == '' & !regEmail.test(email.value)) {
        document.getElementById(email.id + '-span').textContent = 'Enter correct Email';
        validationError = true;
    }
}

function submitButton() {
    submit.addEventListener('click', function (evt) {
        evt.preventDefault();
        console.log('submitButton');
        customValidation();
        if (validationError === false) {
            console.log('post');
            requestPost();
            modal.style.display = "none";
        }
    });
}

function requestPost() {
    let formData = new FormData(document.forms.namedItem("form"));
    var request = new XMLHttpRequest();
    request.open("POST", 'http://httpbin.org/post');
    request.send(formData);
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                popupContent.textContent = 'Sucsess';
            } else {
                popupContent.textContent = 'Something went wrong. Request Status ' + request.status;
            }
            popup.style.display = "block";
            setTimeout(closePopup, 1000);
        }
    };
}

if (btn) {
    btn.addEventListener('click', openModal);
}
