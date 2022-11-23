const oneCixanProqramlarWrapper = document.querySelector(
  ".one-cixan-proqramlar-wrapper"
);

var swiper = new Swiper(".one-cixan-proqramlar-swiper", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 40,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const proqramlarData = [
  {
    src: "../../../src/tools/images/svg/programs__01.svg",
    title: "Azii IT Club",
    description:
      "Fakültədə filan sahədə filan bilgilər öyrədilir və bununla yanaşı filan şeylər edilir.",
  },
  {
    src: "../../../src/tools/images/svg/programs__02.svg",
    title: "Məzun Karyera Mərkəzi",
    description:
      "Fakültədə filan sahədə filan bilgilər öyrədilir və bununla yanaşı filan şeylər edilir.",
  },
  {
    src: "../../../src/tools/images/svg/programs__03.svg",
    title: "Eazi Start",
    description:
      "Fakültədə filan sahədə filan bilgilər öyrədilir və bununla yanaşı filan şeylər edilir.",
  },
  {
    src: "../../../src/tools/images/svg/programs__04.svg",
    title: "Sabah Qrupları",
    description:
      "Fakültədə filan sahədə filan bilgilər öyrədilir və bununla yanaşı filan şeylər edilir.",
  },
];

proqramlarData.forEach((data) => {
  oneCixanProqramlarWrapper.innerHTML += `
        <div class="flex flex-col justify-between bg-white swiper-slide w-1/3 h-3/4 p-9 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500">
          <img class="w-5/6 h-64" src="${data.src}" alt="Logo" />
          <h3 class="text-left mt-6 mb-3 font-semibold text-4xl">${data.title}</h3>
          <p class="text-3xl text-left leading-10 font-normal">${data.description}</p>
        </div>
    `;
});
