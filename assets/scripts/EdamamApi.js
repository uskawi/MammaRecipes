const baseURL = "https://api.edamam.com/search?q=";
let API_KEY = "0213c17af1509fc4e8579eb9eb4536ad";
let API_APP = "bbdefe32";
let searchForm = document.getElementById("searchForm");
let message = "Number Of Recipes";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(cb(JSON.parse(this.responseText)));
        }
    };

    xhr.open("GET", baseURL + type + "&app_id=" +  API_APP + "&app_key=" + API_KEY  +"&to=24");
    xhr.send();
}
