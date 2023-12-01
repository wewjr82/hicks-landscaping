(() => {
  //If you want to add more images, add the link name and URL image URL in the array list below.
  const images_list = [
    {
      url: "https://images.unsplash.com/photo-1551855350-c86caeaf8707?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI2fHxnYXJkZW5pbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "garden care",
      name: "Garden Care",
      link: "https://unsplash.com/photos/gHho4FE4Ga0",
    },
    {
      url: "https://images.unsplash.com/photo-1591255199673-4e2b706645a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZSUyMHBsYW50aW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      alt: "tree planting",
      name: "Tree Planting",
      link: "https://unsplash.com/@georgebakos",
    },
    {
      url: "https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGF3biUyMGNhcmV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "lawn care",
      name: "Lawn Care",
      link: "https://unsplash.com/photos/EkhWxU_pgLo",
    },
    {
      url: "https://images.unsplash.com/photo-1632161293871-cf2083474e34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGFuZHNjYXBpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "landscaping",
      name: "Landscaping",
      link: "https://unsplash.com/photos/MJwb8dEQmr0",
    },
    {
      url: "https://images.unsplash.com/photo-1589876568181-a1508b8ef473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0ZXIlMjBnYXJkZW5pbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "water gardening",
      name: "Water Gardening",
      link: "https://unsplash.com/photos/TV7m_tpmqhw",
    },
  ];

  // generated by https://www.html-code-generator.com/html/image-slideshow-generator
  let slider_id = document.querySelector("#gallery_slider");

  // append all images
  let dots_div = "";
  let images_div = "";
  for (let i = 0; i < images_list.length; i++) {
    // if no link without href="" tag
    let href =
      images_list[i].link == "" ? "" : ' href="' + images_list[i].link + '"';
    images_div +=
      "<a" +
      href +
      ' class="hcg-slides animated"' +
      (i === 0 ? ' style="display:flex"' : "") +
      ">" +
      '<span class="hcg-slide-number">' +
      (i + 1) +
      "/" +
      images_list.length +
      "</span>" +
      '<img src="' +
      images_list[i].url +
      '" alt="' +
      images_list[i].name +
      '">' +
      '<span class="hcg-slide-text">' +
      images_list[i].name +
      "</span>" +
      "</a>";
    dots_div +=
      '<a href="#" class="hcg-slide-dot' +
      (i === 0 ? " dot-active" : "") +
      '" data-id="' +
      i +
      '"></a>';
  }
  slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
  slider_id.querySelector(".hcg-slide-dot-control").innerHTML = dots_div;

  let slide_index = 0;

  const images = slider_id.querySelectorAll(".hcg-slides");
  const dots = slider_id.querySelectorAll(".hcg-slide-dot");
  const prev_button = slider_id.querySelector("#hcg-slide-prev");
  const next_button = slider_id.querySelector("#hcg-slide-next");

  const showSlides = () => {
    if (slide_index > images.length - 1) {
      slide_index = 0;
    }
    if (slide_index < 0) {
      slide_index = images.length - 1;
    }
    for (let i = 0; i < images.length; i++) {
      images[i].style.display = "none";
      dots[i].classList.remove("dot-active");
      if (i == slide_index) {
        images[i].style.display = "flex";
        dots[i].classList.add("dot-active");
      }
    }
  };

  prev_button.addEventListener(
    "click",
    (event) => {
      event.preventDefault();
      slide_index--;
      showSlides();
    },
    false
  );

  next_button.addEventListener(
    "click",
    (event) => {
      event.preventDefault();
      slide_index++;
      showSlides();
    },
    false
  );

  const dot_click = (event) => {
    event.preventDefault();
    slide_index = event.target.dataset.id;
    showSlides();
  };

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", dot_click, false);
  }
})();
