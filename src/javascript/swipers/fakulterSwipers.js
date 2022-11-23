const fakultelerWrapper = document.querySelector(".fakulteler-wrapper");

var swiper = new Swiper(".fakultelerSwiper", {
  slidesPerView: "auto",
  spaceBetween: 40,
  freeMode: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const fakultelerData = [
  {
    src: "../../../src/tools/images/svg/faculty__01.svg",
    title: "Geoloji Kəşfiyyat",
    description:
      "Fakültədə filan sahədə filan bilgilər öyrədilir və bununla yanaşı filan şeylər edilir.",
  },
  {
    src: "../../../src/tools/images/svg/faculty__02.svg",
    title: "Qaz-Neft-Mədən",
    description:
      "Fakültədə filan sahədə filan bilgilər öyrədilir və bununla yanaşı filan şeylər edilir.",
  },
  {
    src: "../../../src/tools/images/svg/faculty__03.svg",
    title: "Kimya-Texnologiya",
    description:
      "Fakültədə filan sahədə filan bilgilər öyrədilir və bununla yanaşı filan şeylər edilir.",
  },
  {
    src: "../../../src/tools/images/svg/faculty__04.svg",
    title: "Neft-Mexanika",
    description:
      "Fakültədə filan sahədə filan bilgilər öyrədilir və bununla yanaşı filan şeylər edilir.",
  },
  {
    src: "../../../src/tools/images/svg/faculty__05.svg",
    title: "Energetika",
    description:
      "Fakültədə filan sahədə filan bilgilər öyrədilir və bununla yanaşı filan şeylər edilir.",
  },
  {
    src: "../../../src/tools/images/svg/faculty__05.svg",
    title: "İT və idarəetmə",
    description:
      "Fakültədə filan sahədə filan bilgilər öyrədilir və bununla yanaşı filan şeylər edilir.",
  },
  {
    src: "../../../src/tools/images/svg/faculty__06.svg",
    title: "İqtisadiyyat və menecment",
    description:
      "Fakültədə filan sahədə filan bilgilər öyrədilir və bununla yanaşı filan şeylər edilir.",
  },
];

fakultelerData.forEach((data) => {
  fakultelerWrapper.innerHTML += `
        <div class="flex flex-col justify-between bg-white swiper-slide w-1/3 h-96 p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500">
          <img class="w-32" src="${data.src}" alt="Geoloji Kesfiyyat Logo" />
          <h3 class="text-left mt-6 mb-3 font-semibold text-4xl">${data.title}</h3>
          <p class="text-3xl text-left leading-10 font-normal">${data.description}</p>
        </div>
    `;
});
