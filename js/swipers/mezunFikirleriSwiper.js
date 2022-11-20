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
          <div class="w-2/4 flex flex-col justify-center mx-auto px-6">       
            <p class="text-xl md:text-6xl text-center mb-6">
                ${data.description}
            </p>
            <p class="text-xl md:text-6xl italic ">
                ${data.fullName}
            </p>
            <p class="text-xl md:text-6xl italic">
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
