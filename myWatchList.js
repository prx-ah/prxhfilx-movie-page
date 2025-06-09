document.addEventListener("DOMContentLoaded", (event) => {
    fetch("movie.json")
    .then((response) => response.json())
    .then((json) => {
      
      for (let i = 0; i < json.length; i++) {
        // console.log(json[1].id);
        // console.log(sessionStorage.getItem(2));
        if(json[i].id == sessionStorage.getItem(json[i].id)){
            document.getElementById(
                "list"
              ).innerHTML += 
              `     <div class="card" style="width: 16rem;">
                    <img id="image" src="${json[i].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p id="title" class="card-text">${json[i].name}</p>
                   <div class="time-button">
                        <button type="button"class="btn btn-outline-secondary btn-outline-light rounded-pill">Action</button>
                        <button type="button"class="btn btn-outline-secondary btn-outline-light rounded-pill">120 mins</button>
                    </div>
                    <a href="movieDetail.html?movieId=${json[i].id}" class="stretched-link"></a>
                </div>
                </div> `        
        }
    }
    });

});
