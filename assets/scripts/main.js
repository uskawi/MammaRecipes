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