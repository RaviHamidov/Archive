const fakultelerWrapper = document.querySelector(".fakulteler-wrapper");
const fakultelerLoadMore = document.querySelector('.fakultelerLoadMore');

const fakultelerData = [
  {
    src: "./images/fakulteler/geoloji_kesfiyyat_logo.png",
    title: "Geoloji Kəşfiyyat",
    description:
      "Fakültədə filan sahədə filan bilgilər öyrədilir və bununla yanaşı filan şeylər edilir.",
  },
  {
    src: "./images/fakulteler/qaz_neft_meden_logo.png",
    title: "Qaz-Neft-Mədən",
    description:
      "Fakültədə filan sahədə filan bilgilər öyrədilir və bununla yanaşı filan şeylər edilir.",
  },
  {
    src: "./images/fakulteler/kimya_texno_logo.png",
    title: "Kimya-Texnologiya",
    description:
      "Fakültədə filan sahədə filan bilgilər öyrədilir və bununla yanaşı filan şeylər edilir.",
  },
  {
    src: "./images/fakulteler/neft_mexanika_logo.png",
    title: "Neft-Mexanika",
    description:
      "Fakültədə filan sahədə filan bilgilər öyrədilir və bununla yanaşı filan şeylər edilir.",
  },
  {
    src: "./images/fakulteler/energetika_logo.png",
    title: "Energetika",
    description:
      "Fakültədə filan sahədə filan bilgilər öyrədilir və bununla yanaşı filan şeylər edilir.",
  },
  {
    src: "./images/fakulteler/it_idareetme_logo.png",
    title: "İT və idarəetmə",
    description:
      "Fakültədə filan sahədə filan bilgilər öyrədilir və bununla yanaşı filan şeylər edilir.",
  },
  {
    src: "./images/fakulteler/iqtisadiyyat_menecement_logo.png",
    title: "İqtisadiyyat və menecment",
    description:
      "Fakültədə filan sahədə filan bilgilər öyrədilir və bununla yanaşı filan şeylər edilir.",
  },
];

fakultelerData.forEach((data) => {
  fakultelerWrapper.innerHTML += `
        <div class=" flex flex-col justify-between bg-white swiper-slide w-full md:w-1/3 mb-6 h-96 p-6 rounded-3xl hover:shadow-xl shadow-l transition-all duration-500">
          <img class="w-32" src="${data.src}" alt="Geoloji Kesfiyyat Logo" />
          <h3 class="text-left mt-6 mb-3 font-semibold text-4xl">${data.title}</h3>
          <p class="text-3xl text-left leading-10 font-normal">${data.description}</p>
        </div>
    `;
});


if (window.screen.width < 768) {
  fakultelerWrapper.classList.remove('swiper-wrapper');

  for (let elem of fakultelerWrapper.children) {
    elem.classList.add('hidden');
  }

  let fakulteWrapperCount = 0;
  for (let elem of fakultelerWrapper.children) {
    fakulteWrapperCount++;
    elem.classList.remove('hidden');
    if (fakulteWrapperCount == 3) break;
  }

} else {
  var swiper = new Swiper(".fakultelerSwiper", {
    slidesPerView: "auto",
    spaceBetween: 40,
    freeMode: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
}

fakultelerLoadMore.addEventListener('click', (event) => {
  fakultelerLoadMore.classList.add('hidden');
  for (let elem of fakultelerWrapper.children) elem.classList.remove('hidden');
});