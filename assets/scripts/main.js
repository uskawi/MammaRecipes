let searchInput = document.getElementById("searchInput");
let navItems = document.getElementsByClassName('nav-item');
let icon = document.getElementsByClassName('icon');
let suggestionIcon = document.getElementsByClassName('suggestion-icon');
let subscribeButton = document.getElementById('subscribe-button');
let openSubscribe = document.getElementsByClassName("open-subscribe");
let closeSubscribe = document.getElementById('closeSubscribe');
let subscribe = document.getElementById('subscribe-div');
let contact = document.getElementById('contact');
let closeContactForm = document.getElementById('closeContact');
let contactDiv = document.getElementById('contact-div');
let footerItem = document.getElementsByClassName('footer-item');

// added hover effect to search bar

function styleInput(element) {
    element.style.border = "2px solid #5B98B7";
    element.style.boxShadow = "5px 10px #000";
    element.style.backgroundColor = "rgb(206, 201, 201)"
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


for (let i = 0; i < suggestionIcon.length; i++) {
    icon[i].addEventListener('mouseenter', function () {
        suggestionIcon[i].classList.remove('suggestion-before');
        suggestionIcon[i].classList.add('suggestion-after');
    })
}

for (let i = 0; i < suggestionIcon.length; i++) {
    icon[i].addEventListener('mouseout', function () {
        suggestionIcon[i].classList.remove('suggestion-after');
        suggestionIcon[i].classList.add('suggestion-before');
    })
}

subscribeButton.addEventListener('mouseenter', function () {
    subscribeButton.classList.remove('subscribe-button-before');
    subscribeButton.classList.add('subscribe-button-after');
})

subscribeButton.addEventListener('mouseout', function () {
    subscribeButton.classList.remove('subscribe-button-after');
    subscribeButton.classList.add('subscribe-button-before');
})

for (let i = 0; i < footerItem.length; i++) {
    footerItem[i].addEventListener('mouseenter', function () {
        footerItem[i].classList.remove('footer-item');
        footerItem[i].classList.add('footer-item');
    })
}

contact.addEventListener('click', function () {
    if (subscribe.classList.contains('hide')) {
        contactDiv.classList.remove('hide');
    } else {
        alert("Please Close Subscribe form");
    }
})

closeContactForm.addEventListener('click', function () {
    contactDiv.classList.add('hide');
})


for (let i = 0; i < openSubscribe.length; i++) {
    openSubscribe[i].addEventListener('click', function () {
        if(contactDiv.classList.contains('hide')){
        subscribe.classList.remove('hide');
        }else{
            alert("Please Close Contact Form");
        }
    })
}

closeSubscribe.addEventListener('click', function () {
    subscribe.classList.add('hide');
})