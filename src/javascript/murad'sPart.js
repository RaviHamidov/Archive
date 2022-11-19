var h11 = document.getElementById("h11");
var h12 = document.getElementById("h12");
var wrapper = document.querySelector(".news-announces");
h11.style = "background-color:#fff;"
VanillaCounter();

//news event listener
h11.addEventListener("click", () => {

    h11.classList.add("active")
    h12.classList.remove("active")
    showNews()
})

//announce event listener
h12.addEventListener("click", () => {
    h11.style = ""
    h12.classList.add("active")
    h11.classList.remove("active")
    showAnnounces()

})

// parallax
window.addEventListener('scroll', parallax);
function parallax() {
    var scrolled = window.pageYOffset;
    // if (scrolled <= 700 ){
    //  return
    // }
    var parallax = document.querySelector(".parallax");
    // You can adjust the 0.4 to change the speed
    var coords = ((scrolled-790) * .18) + 'px'
    parallax.style.transform = `translateY(${coords})`;
    console.log(scrolled)
};

//for showing announces
function showAnnounces() {
    wrapper.innerHTML = ""

    for (let i = 0; i < announceData.length; i++) {
        if (announceData[i] == undefined) {
            announceHTML = ""
        }
        var announceHTML = announceHTML + `
      <div class="swiper-slide">
        <img
          src=${announceData[i].img}
          class=""
          alt=""
        />
        <p class="text-3xl text-[#1A265C]">
         ${announceData[i].header}
        </p>
      </div>
    `;
    }
    wrapper.insertAdjacentHTML("beforeend", announceHTML)
}

//for showing news
function showNews() {
    wrapper.innerHTML = ""
    for (let i = 0; i < newsData.length; i++) {
        if (newsData[i] == undefined) {
            newsHTML = ""
        }
        var newsHTML = newsHTML + `
        <div class="swiper-slide">
               <img
                 src=${newsData[i].img}
                 alt=""
               />
               <p class="text-3xl text-[#1A265C]">
                ${newsData[i].header}
               </p>
             </div>
        `;


    }
    wrapper.insertAdjacentHTML("beforeend", newsHTML)
}

//dummy news data
var newsData = [
    {
        img: "http://asoiu.edu.az/photos/shares/Xeberler/635badfd86851.JPG",
        header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, ."
    },
    {
        img: "http://asoiu.edu.az/photos/shares/63637f89a1280.jpg",
        header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, ."
    },
    {
        img: "http://asoiu.edu.az/photos/shares/News/1e76d56ef8681d18449c2caff20c96ae.jpeg",
        header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, ."
    },
    {
        img: "http://asoiu.edu.az/photos/shares/63637f89a1280.jpg",
        header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, ."
    },
    {
        img: "http://asoiu.edu.az/photos/shares/Xeberler/635badfd86851.JPG",
        header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, ."
    },
    {
        img: "http://asoiu.edu.az/photos/shares/63637f89a1280.jpg",
        header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, ."
    },
    {
        img: "http://asoiu.edu.az/photos/shares/Xeberler/635badfd86851.JPG",
        header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, ."
    },
    {
        img: "http://asoiu.edu.az/photos/shares/63637f89a1280.jpg",
        header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, ."
    },
    {
        img: "http://asoiu.edu.az/photos/shares/Xeberler/635badfd86851.JPG",
        header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, ."
    },
    {
        img: "http://asoiu.edu.az/photos/shares/63637f89a1280.jpg",
        header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, ."
    },

]
showNews()

//dummy announce data
var announceData = [
    {
        img: "http://asoiu.edu.az/photos/shares/News/688d6171275f26a2948dc189a73b1d33.jpeg",
        header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, ."
    },
    {
        img: "http://asoiu.edu.az/photos/shares/News/5557dbf26964599f42754ab1c515de37.jpeg",
        header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, ."
    },
    {
        img: "http://asoiu.edu.az/photos/shares/Xeberler/635badfd86851.JPG",
        header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, ."
    },
    {
        img: "http://asoiu.edu.az/photos/shares/Xeberler/635badfd86851.JPG",
        header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, ."
    },
    {
        img: "http://asoiu.edu.az/photos/shares/63637f89a1280.jpg",
        header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, ."
    },
    {
        img: "http://asoiu.edu.az/photos/shares/News/1e76d56ef8681d18449c2caff20c96ae.jpeg",
        header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, ."
    },
    {
        img: "http://asoiu.edu.az/photos/shares/63637f89a1280.jpg",
        header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, ."
    },
    {
        img: "http://asoiu.edu.az/photos/shares/Xeberler/635badfd86851.JPG",
        header: " Noyabrın 3-də Azərbaycan Respublikası Elm və Təhsil Nazirliyi, ."
    },
]