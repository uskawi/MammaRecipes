/*jshint esversion: 6 */
let searchInput = document.getElementById("searchInput");
let icon = document.getElementsByClassName('icon');
let suggestionIcon = document.getElementsByClassName('suggestion-icon');
let subscribeButton = document.getElementById('subscribe-button');
let openSubscribe = document.getElementsByClassName("open-subscribe");
let closeSubscribe = document.getElementById('closeSubscribe');
let subscribe = document.getElementById('subscribe-div');
let contact = document.getElementById('contact');
let closeContactForm = document.getElementById('closeContact');
let contactDiv = document.getElementById('contact-div');
let subscriberName = document.getElementById('subscriberName');
let subscriberEmail =  document.getElementById('subscriberEmail');
let contactName =  document.getElementById('name');
let senderName=  document.getElementById('emailAddress');
let contactMessage =  document.getElementById('message');
let contactUserMessage = document.getElementById('contactUserMessage');
let  subscribetUserMessage = document.getElementById('subscribetUserMessage');



// added hover effect to search bar

function styleInput(element) {
    element.style.border = "2px solid #5B98B7";
    element.style.boxShadow = "5px 10px #000";
    element.style.backgroundColor = "rgb(206, 201, 201)";
    element.style.height = "35px";
    element.style.fontSize = "16px";
}

searchInput.addEventListener("mouseenter", function () {
    styleInput(searchInput);
});

function styleBackInput(element) {
    element.style.border = "1.5px solid rgb(138, 136, 136)";
    element.style.boxShadow = "none";
    element.style.backgroundColor = "#fff";
    element.style.height = "30px";
    element.style.fontSize = "12px";
}

searchInput.addEventListener("mouseout", function () {
    styleBackInput(searchInput);
});

// added hover effect to search-suggestionIcons

for (let i = 0; i < suggestionIcon.length; i++) {
    icon[i].addEventListener('mouseenter', function () {
        suggestionIcon[i].classList.remove('suggestion-before');
        suggestionIcon[i].classList.add('suggestion-after');
    });
}

// added hover effect to subscribe Button

for (let i = 0; i < suggestionIcon.length; i++) {
    icon[i].addEventListener('mouseout', function () {
        suggestionIcon[i].classList.remove('suggestion-after');
        suggestionIcon[i].classList.add('suggestion-before');
    });
}

subscribeButton.addEventListener('mouseenter', function () {
    subscribeButton.classList.remove('subscribe-button-before');
    subscribeButton.classList.add('subscribe-button-after');
});

subscribeButton.addEventListener('mouseout', function () {
    subscribeButton.classList.remove('subscribe-button-after');
    subscribeButton.classList.add('subscribe-button-before');
});

// removed class hide from the contact form to appear on the screen  

contact.addEventListener('click', function () {
    if (subscribe.classList.contains('hide')) {
        contactDiv.classList.remove('hide');
    } else {
        alert("Please Close Subscribe form");
    }
});

// added  class hide to the contact form to make it go  back to default style(hidden)

closeContactForm.addEventListener('click', function () {
    contactUserMessage.innerHTML = "";
    contactName.value ="";
    contactMessage.value = "";
    senderName.value = "";
    contactDiv.classList.add('hide');
});

// removed class hide from the subscribe form to make it appear on the screen  
for (let i = 0; i < openSubscribe.length; i++) {
    openSubscribe[i].addEventListener('click', function () {
        subscribetUserMessage.innerHTML = "";
        if(contactDiv.classList.contains('hide')){
        subscribe.classList.remove('hide');
        }else{
            alert("Please Close Contact Form");
        }
    });
}

// added  class hide to the subscribe form to make it go  back to default style(hidden)

closeSubscribe.addEventListener('click', function () {
    subscribetUserMessage.innerHTML = "";
    subscriberName.value = "";
    subscriberEmail.value = "";
    subscribe.classList.add('hide');
});