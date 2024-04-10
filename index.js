// addEventListener("DOMContentLoaded", (event) => {

let heading = document.getElementById("header1")
let button2 = document.getElementById("btn2")

heading.style.background = "gold"
button2.addEventListener("mouseover", () =>{
    button2.style.backgroundColor = "204, 218, 79, 0.651"
})
button2.addEventListener("mouseout", () =>{
    button2.style.backgroundColor = "grey"
})



   //targeting the page button, when clicked one it desplays page info, click again and the info collapses
    document.getElementById("displayButton").addEventListener("click", function() {
        const displayText = document.getElementById("displayText");
        if (displayText.style.display === "none") {
            displayText.style.display = "block";
        } else {
            displayText.style.display = "none";
        }
    });


function fetchData(){
 fetch("https://api.jikan.moe/v4/anime")
     .then(response => response.json())
     .then(data => {
listOfAnime(data)
     })
     .catch(error => error);
}
fetchData();

function listOfAnime(data){
    const animeListContainer = document.getElementById("animeInfo")
const fetchData = data.data
// console.log(data.data)
animeListContainer.innerHTML  = ``
fetchData.forEach(element => {
    console.log(element)
    const animeDiv = document.createElement("div")
    animeDiv.classList = "animeSlipCard"
    animeDiv.innerHTML = `
    <img src=${element.images.jpg.image_url} alt="">
    <h1>${element.title}</h1>
    <p>${element.synopsis}</p>
    <p>Youtube url <br>${element.trailer.url}</p>
    `
    animeListContainer.appendChild(animeDiv)
});
}

function searchTab(){
    const searchInput = document.getElementById("searchInput").value
  
    fetch(`https://api.jikan.moe/v4/anime?q=${searchInput}`)
    .then(response => response.json())
    .then(data => {
listOfAnime(data)
    })
    .catch(error => console.log(error));
}
// });