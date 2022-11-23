const mezunFikirleriWrapper = document.querySelector(".mezun-fikir-wrapper");

const mezunFikirData = [
  {
    scr: "./images/mezun-fikirleri/mezun_bombe.png",
    description:
      "Mənim üçün bu universitet həyatımın ən doğru seçimi idi. Mənim üçün bu universitet həyatımın ən doğru seçimi idi.",
    fullName: "Filankes Filankesov",
    work: "Filan şirkətdə Mühəndis",
  },
  {
    scr: "./images/mezun-fikirleri/mezun_bombe.png",
    description:
      "Mənim üçün bu universitet həyatımın ən doğru seçimi idi. Mənim üçün bu universitet həyatımın ən doğru seçimi idi.",
    fullName: "Filankes Filankesov",
    work: "Filan şirkətdə Mühəndis",
  },
  {
    scr: "./images/mezun-fikirleri/mezun_bombe.png",
    description:
      "Mənim üçün bu universitet həyatımın ən doğru seçimi idi. Mənim üçün bu universitet həyatımın ən doğru seçimi idi.",
    fullName: "Filankes Filankesov",
    work: "Filan şirkətdə Mühəndis",
  },
];

mezunFikirData.forEach((data) => {
  mezunFikirleriWrapper.innerHTML += `
        <div class="swiper-slide flex flex-col md:flex-row md:p-9">
          <img class="w-full md:w-2/4" src="${data.scr}" alt="bombee">
          <div class="w-2/4 flex flex-col justify-center mx-auto md:pl-6 md:pr-20">       
            <p class="text-2xl md:text-6xl mb-6 text-[#1A265C]">
                ${data.description}
            </p>
            <p class="font-semibold text-2xl md:text-6xl italic text-[#617EFF]">
                ${data.fullName}
            </p>
            <p class="font-medium text-2xl md:text-6xl italic text-[#617EFF]">
                ${data.work}
            </p>            
          </div>
        </div>
    `;
});

var swiper = new Swiper(".mezunFikirleriSwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
