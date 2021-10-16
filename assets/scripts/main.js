let searchIcon = document.getElementById('searchIcon');
let searchInput = document.getElementById("searchInput");


// EventListener added to add hover effect to searchIcon

searchIcon.addEventListener("mouseenter", function (event) {
    // highlight the mouseenter target
    event.target.style.color = "green";
    event.target.style.fontSize = "180%";
    // time out after 1000ms
    setTimeout(function () {
        event.target.style.color = "rgb(138, 136, 136)";
        event.target.style.fontSize = "130%";
    }, 1000);
}, false);

