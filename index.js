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
      let current = new Set();
      for (let i = 0; i < 10; i++) {
        let rand = Math.random() * 10;
        rand = Math.floor(rand);

        while (current.has(rand)) {
          rand = Math.random() * 10;
          rand = Math.floor(rand);
        }
        current.add(rand);
        console.log(current[0]);
      }
      let curr = Array.from(current);
      for (let j = 0; j < 5; j++) {
        // console.log(rand)
        document.getElementById(
          "show_products"
        ).innerHTML += ` <div class="card p-3"  style="width: 18rem;">
                                        <img src="${
                                          json[curr[j]].image
                                        }" class=" card-img-top" alt="..." />
                                        <div class="card-body">
                                          <p class="card-title">${
                                            json[curr[j]].name
                                          }</p>
                                            
                                           <a href="movieDetail.html" type="button"
              class="btn btn-outline-secondary  rounded-pill">Action</a>
            <button type="button"
              class="btn btn-outline-secondary  rounded-pill">120
              mins</button>
                                        </div>
                                        <a href="movieDetail.html?movieId=${
                                          json[curr[j]].id
                                        }" class="stretched-link"></a>
                                      </div>`;
        document.getElementById(
          "show_products2"
        ).innerHTML += ` <div class="card p-3"  style="width: 18rem;">
                                        <img src="${
                                          json[curr[j + 5]].image
                                        }" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                          <p class="card-title">${
                                            json[curr[j + 5]].name
                                          }</p>
                                            
                                           <a href="movieDetail.html" type="button"
              class="btn btn-outline-secondary  rounded-pill">Action</a>
            <button type="button"
              class="btn btn-outline-secondary  rounded-pill">120
              mins</button>
                                        </div>
                                        <a href="movieDetail.html?movieId=${
                                          json[curr[j + 5]].id
                                        }" class="stretched-link"></a>
                                      </div>`;
      }
    });
});

$("#recipeCarousel").carousel({
  interval: 10000,
});

$(".carousel .carousel-item").each(function () {
  var minPerSlide = 3;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});
