const api = 'https://api.lyrics.ovh';

const form = document.getElementById('form')
const search = document.getElementById('lyricSearch')
const result = document.getElementById('output')

form.addEventListener("submit", e => {
    e.preventDefault();
    searchValue = search.value.trim();

    if (!searchValue) {
        alert("search again");
    } else {
        startSearch(searchValue);
    }
})

function search (output){
    
}