document.addEventListener("DOMContentLoaded", (event) => {
  const search = window.location.search;
  //console.log("🚀 ~ document.addEventListener ~ search:", search)
  const urlParams = new URLSearchParams(search);
  //console.log("🚀 ~ document.addEventListener ~ urlParams:", urlParams)
  // const movieId = urlParams.get('movieId');
  //console.log("🚀 ~ document.addEventListener ~ movieId:", movieId)

  fetch("movie.json")
    .then((response) => response.json())
    .then((json) => {
      // console.log(json.length);
    
      for (let i = 0; i < json.length; i++) {
        // console.log(rand)
        document.getElementById(
          "show_products"
        ).innerHTML += `<div class="card" style="width: 16rem;">
                                          <img src="${json[i].image}" class="card-img-top" alt="..." />
                                          <div class="card-body">
                                            <h5 class="card-title">${json[i].name}</h5>
                                             <div class="time-button">
                                              <button type="button"class="btn btn-outline-secondary   rounded-pill">Action</button>
                                              <button type="button"class="btn btn-outline-secondary   rounded-pill">120 mins</button>
                                              </div>
                                              <a href="movieDetail.html?movieId=${json[i].id}" class="stretched-link"></a>
                                            </div>
                                            `;
      }

      
      
    });
 
});

function findMovie(e){
  let movieName = e.toUpperCase();
  //console.log("🚀 ~ movieName.toUpperCase();:", movieName.toUpperCase());

  fetch("movie.json")
     .then((response) => response.json())
     .then((json) => {

      
      const foundJson = json.filter(j => j.name.includes(movieName))
      console.log("🚀 ~ .then ~ foundJson:", foundJson)
      
     
      // if(foundJson){
        document.getElementById("show_products").innerHTML = ``;
        for (let i = 0; i < foundJson.length; i++) {
          console.log("hello")
          console.log(foundJson[i].name)
          document.getElementById(
            "show_products"
          ).innerHTML += `<div class="card" style="width: 16rem;">
                                            <img src="${foundJson[i].image}" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                              <h5 class="card-title">${foundJson[i].name}</h5>
                                               <div class="time-button">
                                                <button type="button"class="btn btn-outline-secondary btn-outline-light rounded-pill">Action</button>
                                                <button type="button"class="btn btn-outline-secondary btn-outline-light rounded-pill">120 mins</button>
                                                </div>
                                                <a href="movieDetail.html?movieId=${foundJson[i].id}" class="stretched-link"></a>
                                              </div>
                                              `;
        }
        console.log(document.getElementById("show_products"))
      // }
      // else{
      //   document.getElementById("show_products").innerHTML = ``;
      //   for (let i = 0; i < json.length; i++) {
      //     document.getElementById(
      //       "show_products"
      //     ).innerHTML += `<div class="card" style="width: 16rem;">
      //                                       <img src="${json[i].image}" class="card-img-top" alt="..." />
      //                                       <div class="card-body">
      //                                         <h5 class="card-title">${json[i].name}</h5>
      //                                          <div class="time-button">
      //                                           <button type="button"class="btn btn-outline-secondary btn-outline-light rounded-pill">Action</button>
      //                                           <button type="button"class="btn btn-outline-secondary btn-outline-light rounded-pill">120 mins</button>
      //                                           </div>
      //                                           <a href="movieDetail.html?movieId=${json[i].id}" class="stretched-link"></a>
      //                                         </div>
      //                                         `;
      //   }
      // }
  });


 }
  

