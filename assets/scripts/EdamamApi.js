const baseURL = "https://api.edamam.com/search?q=";
let API_KEY = "0213c17af1509fc4e8579eb9eb4536ad";
let API_APP = "bbdefe32";
let searchForm = document.getElementById("searchForm");
let message = "Number Of Recipes";

searchForm.addEventListener('submit', function(event){
    event.preventDefault();
    searchInput = event.target.getElementsByTagName("input")[0].value;
    writeToDocument(searchInput);

})

function capitalise(str){
    capitalisedString = str[0].toUpperCase() + str.substring(1)
    return capitalisedString;
  }

function getData(type, cb) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "&app_id=" +  API_APP + "&app_key=" + API_KEY  +"&to=24");
    xhr.send();
}


function writeToDocument(type) {
    let ResultsCount = document.getElementById("ResultsCount");
    var el = document.getElementById("data");
    el.innerHTML = "";

    getData(type, function(data) {
        data = data.hits;
        ResultsCount.innerHTML = message + "  " +  "[" + data.length + "]";
        console.dir(data);
        data.forEach(function(item) {
         let capital = capitalise(item.recipe.cuisineType[0]);

           el.innerHTML += `
           <div class="recipe-card" onclick="window.open('${item.recipe.url}', '_blank');" >
                <img src="${item.recipe.image}" alt="Dish Image">
                <h5>${item.recipe.label}<span>By (${item.recipe.source})</span></h5>
                <div class="description">
                    <div class="item1"><p>Origine :<span>${capital}</span></p></div>
                    <div class="item2"><p>Course :<span>${item.recipe.dishType}</span></p></div>
                    <div class="item3"><p>Energie : <span>${Math.floor(item.recipe.calories)} kcal</span></p></div>
                    <div class="item4"><p>Number Of Serving :<span> ${item.recipe.yield}</span></p></div>
                </div>
           </div>
            `;
          });
    });
}