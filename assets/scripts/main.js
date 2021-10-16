let searchIcon = document.getElementById('searchIcon');
let searchInput = document.getElementById("searchInput");
let navItems = document.getElementsByClassName('nav-item');
let navLink = document.getElementsByClassName('nav-link')[1];





// EventListener added to add hover effect to searchIcon

searchIcon.addEventListener("mouseenter", function (event) {
    // highlight the mouseenter target
    event.target.style.fontSize = "180%";
    // time out after 2000ms
    setTimeout(function () {
        event.target.style.color = "rgb(138, 136, 136)";
        event.target.style.fontSize = "130%";
    }, 2000);
}, false);

// EventListener added to search icon to highlight search bar

searchIcon.addEventListener("click", function () {
    searchInput.style.border = "2px solid #5B98B7";
    searchInput.style.boxShadow = "5px 10px #000";
    searchInput.style.backgroundColor = "rgb(206, 201, 201)"
    // time out after 2000ms
    setTimeout(function () {
        searchInput.style.border = "1.5px solid rgb(138, 136, 136)";
        searchInput.style.boxShadow = "none";
        searchInput.style.backgroundColor = "#fff"
    }, 2000);
}, false);

// EventListener mouseenter added to  navbar-items to add hover effect


// let smallScreenWidth = window.matchMedia("(max-width: 558px)");
if (window.matchMedia("(min-width: 575px)").matches) {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('mouseenter', function () {
            navItems[i].style.fontSize = "20px";
        });
    }
} else {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('mouseenter', function () {
            navItems[i].classList.remove('nav-item-colors');
            navItems[i].classList.add('nav-item-colors-hover');

        });
    }
}


// EventListener onmouseout added to  navbar-items to add hover effect

if (window.matchMedia("(min-width: 575px)").matches) {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('mouseout', function () {
            navItems[i].style.fontSize = "15px";
        });
    }
} else {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('mouseout', function () {
            navItems[i].classList.remove('nav-item-colors-hover');
            navItems[i].classList.add('nav-item-colors');
        });
    }
} 