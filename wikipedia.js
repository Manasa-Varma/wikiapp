let searchInputEl = document.getElementById("searchInput");

function searchWikipedia(event) {
    if (event.key === "Enter");
    let searchInput = searchInputEl.value;
    let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
    let options = {
        method: "GET"
    }
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
        });
}


searchInputEl.addEventListener("keydown", searchWikipedia);