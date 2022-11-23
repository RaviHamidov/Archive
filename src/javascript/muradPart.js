//dummy news data
var newsData = [
  {
    img: "http://asoiu.edu.az/photos/shares/Xeberler/635badfd86851.JPG",
    date: "27 Iyul 2022",
    header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, .",
  },
  {
    img: "http://asoiu.edu.az/photos/shares/63637f89a1280.jpg",
    date: "27 Iyul 2022",
    header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, .",
  },
  {
    img: "http://asoiu.edu.az/photos/shares/News/1e76d56ef8681d18449c2caff20c96ae.jpeg",
    date: "27 Iyul 2022",
    header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, .",
  },
  {
    img: "http://asoiu.edu.az/photos/shares/63637f89a1280.jpg",
    date: "27 Iyul 2022",
    header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, .",
  },
  {
    img: "http://asoiu.edu.az/photos/shares/Xeberler/635badfd86851.JPG",
    date: "27 Iyul 2022",
    header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, .",
  },
  {
    img: "http://asoiu.edu.az/photos/shares/63637f89a1280.jpg",
    date: "27 Iyul 2022",
    header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, .",
  },
  {
    img: "http://asoiu.edu.az/photos/shares/Xeberler/635badfd86851.JPG",
    date: "27 Iyul 2022",
    header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, .",
  },
  {
    img: "http://asoiu.edu.az/photos/shares/63637f89a1280.jpg",
    date: "27 Iyul 2022",
    header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, .",
  },
  {
    img: "http://asoiu.edu.az/photos/shares/Xeberler/635badfd86851.JPG",
    date: "27 Iyul 2022",
    header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, .",
  },
  {
    img: "http://asoiu.edu.az/photos/shares/63637f89a1280.jpg",
    date: "27 Iyul 2022",
    header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, .",
  },
];

//dummy announce data
var announceData = [
  {
    img: "http://asoiu.edu.az/photos/shares/News/688d6171275f26a2948dc189a73b1d33.jpeg",
    date: "27 Iyul 2022",
    header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, .",
  },
  {
    img: "http://asoiu.edu.az/photos/shares/Xeberler/635badfd86851.JPG",
    date: "27 Iyul 2022",
    header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, .",
  },
  {
    img: "http://asoiu.edu.az/photos/shares/Xeberler/635badfd86851.JPG",
    date: "27 Iyul 2022",
    header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, .",
  },
  {
    img: "http://asoiu.edu.az/photos/shares/63637f89a1280.jpg",
    date: "27 Iyul 2022",
    header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, .",
  },
  {
    img: "http://asoiu.edu.az/photos/shares/News/1e76d56ef8681d18449c2caff20c96ae.jpeg",
    date: "27 Iyul 2022",
    header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, .",
  },
  {
    img: "http://asoiu.edu.az/photos/shares/63637f89a1280.jpg",
    date: "27 Iyul 2022",
    header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, .",
  },
  {
    img: "http://asoiu.edu.az/photos/shares/Xeberler/635badfd86851.JPG",
    date: "27 Iyul 2022",
    header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, .",
  },
];
var h11 = document.getElementById("h11");
var h12 = document.getElementById("h12");
var wrapper = document.querySelector(".news-announces");
h11.style = "background-color:#fff;";
// VanillaCounter();

//news event listener
h11.addEventListener("click", () => {
  h11.classList.add("active");
  h12.classList.remove("active");
  showNews();
});

//announce event listener
h12.addEventListener("click", () => {
  h11.style = "";
  h12.classList.add("active");
  h11.classList.remove("active");
  showAnnounces();
});

// parallax
window.addEventListener("scroll", parallax);
function parallax() {
  var scrolled = window.pageYOffset;
  // if (scrolled <= 700 ){
  //  return
  // }
  var parallax = document.querySelector(".parallax");
  // You can adjust the 0.4 to change the speed
  var coords = (scrolled - 790) * 0.18 + "px";
  parallax.style.transform = `translateY(${coords})`;
}

//for showing announces
function showAnnounces() {
  wrapper.innerHTML = "";
  var announceHTML = "";
  for (let i = 0; i < announceData.length; i++) {
    console.log(announceData[i]);
    if (announceData[i] == undefined) {
      announceHTML = "";
      continue;
    }
    announceHTML =
      announceHTML +
      `
      <div class="swiper-slide relative w-12/12 sm:w-6/12 md:3/12">
        <span
          class="absolute top-0 left-0 text-base leading-4 bg-[#e4e7f3] text-[#617EFF] font-font-light p-1 rounded m-3"
        >
          <i class="fa-solid fa-calendar p-1"></i>
          ${announceData[i].date}
        </span>

        <img
          src="${announceData[i].img}"
          class="object-cover w-full rounded-xl block"
          alt=""
        />
        <h3 class="text-[#3E5BDB] text-lg font-font-light leading-5 opacity-70">
          BEYNƏLXALQ
        </h3>
        <p class="text-2xl font-font-light leading-6 text-[#1A265C] opacity-70">
          ${announceData[i].header}
        </p>
      </div>
     `;
  }
  wrapper.insertAdjacentHTML("beforeend", announceHTML);
}

//for showing news
function showNews() {
  wrapper.innerHTML = "";
  var newsHTML = "";
  for (let i = 0; i < newsData.length; i++) {
    if (newsData[i] == undefined) {
      newsHTML = "";
      continue;
    }
    newsHTML =
      newsHTML +
      `
      <div class="swiper-slide relative w-12/12 sm:w-6/12 md:3/12">
        <span
          class="absolute top-0 left-0 text-base leading-4 bg-[#e4e7f3] text-[#617EFF] font-light p-1 rounded m-3"
        >
          <i class="fa-solid fa-calendar p-1"></i>
          ${newsData[i].date}
        </span>
    
        <img
          src="${newsData[i].img}"
          class="object-cover w-full rounded-xl block"
          alt=""
        />
        <h3 class="text-[#3E5BDB] text-lg font-light leading-5 opacity-70">
          BEYNƏLXALQ
        </h3>
        <p class="text-2xl font-light leading-6 text-[#1A265C] opacity-70">
          ${newsData[i].header}
        </p>
      </div>
    `;
  }
  wrapper.insertAdjacentHTML("beforeend", newsHTML);
}

showNews();
