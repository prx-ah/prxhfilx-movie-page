document.addEventListener("DOMContentLoaded", (event) => {
    const search = window.location.search
    //console.log("🚀 ~ document.addEventListener ~ search:", search)
    const urlParams = new URLSearchParams(search);
    //console.log("🚀 ~ document.addEventListener ~ urlParams:", urlParams)
    const movieId = urlParams.get('movieId');
    //console.log("🚀 ~ document.addEventListener ~ movieId:", movieId)
    if((movieId == sessionStorage.getItem(movieId)) == true){
        document.getElementById('button').innerHTML = `
        <button id="btn-watchlist" type="button" class="btn btn-secondary btn-success" value="add"><i id="icon" class="bi bi-check-lg"></i>Watchlist</button>
        <button id="btn-watchnow" type="button" class="btn btn-outline-warning">Watch Now</button>`
    }
    fetch("movie.json")
        .then(response => response.json())
        .then(json => {
            const foundJson = json.find(j => j.id === movieId)
            if(foundJson){
                document.getElementById('card-title').innerText = foundJson.name;
                document.getElementById('image').src = foundJson.image;
                document.getElementById('rate').innerText = foundJson.rate;
                document.getElementById('description').innerText = foundJson.description;
                document.getElementById('sample').src = foundJson.sample;
            }

            
            document.getElementById('btn-watchlist').addEventListener('click', () => {
                var icon = document.getElementById("icon");
                    var button = document.getElementById("btn-watchlist")
                    icon.classList.toggle('bi-plus-lg');
                    icon.classList.toggle('bi-check-lg');
                    button.classList.toggle('btn-success');
                    //button.disable = true;
                    // button.value = 'a';
                addlist();   
            });
    })
});

function addlist() {
    console.log('start addlist');
    const search = window.location.search    
    console.log("🚀 ~ addlist ~ search:", search)
    const urlParams = new URLSearchParams(search);    
    const movieId = urlParams.get('movieId');
    console.log(document.getElementById('button'));
    if(document.getElementById('btn-watchlist').value == 'add'){
        console.log('del');
        sessionStorage.removeItem(movieId)
        //console.log("🚀 ~ addlist ~ sessionStorage:", sessionStorage)

    }else {
        sessionStorage.setItem(movieId,movieId)
        console.log("🚀 ~ addlist ~ sessionStorage:", sessionStorage.getItem(movieId))

    }
    
    
    
    
}
       