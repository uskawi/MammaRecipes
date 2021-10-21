/*jshint esversion: 6 */
const baseURL = "https://api.edamam.com/search?q=";
let API_KEY = "0213c17af1509fc4e8579eb9eb4536ad";
let API_APP = "bbdefe32";
let searchForm = document.getElementById("searchForm");
var data


searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let searchInput = event.target.getElementsByTagName("input")[0].value;
    writeToDocument(searchInput);
});

function getData(type, cb) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "&app_id=" + API_APP + "&app_key=" + API_KEY + "&to=24");
    xhr.send();
}


function writeToDocument(type) {
    let resultsCount = document.getElementById("resultsCount");
    let el = document.getElementById("data");
    el.innerHTML = "";
    resultsCount.innerHTML = "";
    getData(type, function (data) {      
        data = data.hits;
        resultsCount.innerHTML = `<h3> ${data.length} Recipes for ${type}</h3>`;
        for (let item = 0; item < data.length; item++) {
            el.innerHTML += `
           <div id="recipe${item}" class="recipe-card">
                <img src="${data[item].recipe.image}" alt="Dish Image">
                <h5>${data[item].recipe.label}<span>By (${data[item].recipe.source})</span></h5>
                <div class="description">
                    <div class="item1"><p>Origine :<span>${data[item].recipe.type}</span></p></div>
                    <div class="item2"><p>Course :<span>${data[item].recipe.dishType}</span></p></div>
                    <div class="item3"><p>Energie : <span>${Math.floor(data[item].recipe.calories)} kcal</span></p></div>
                    <div class="item4"><p>Number Of Serving :<span> ${data[item].recipe.yield}</span></p></div>
                </div>
           </div>
            `;
        }
        
    });

}
