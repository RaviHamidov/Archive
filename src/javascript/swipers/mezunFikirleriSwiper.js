const mezunFikirleriWrapper = document.querySelector(".mezun-fikir-wrapper");

const mezunFikirData = [
  {
    src: "../../../src/tools/images/png/graduate__01.png",
    description:
      "Mənim üçün bu universitet həyatımın ən doğru seçimi idi. Mənim üçün bu universitet həyatımın ən doğru seçimi idi.",
    fullName: "Filankes Filankesov",
    work: "Filan şirkətdə Mühəndis",
  },
  {
    src: "../../../src/tools/images/png/graduate__02.png",
    description:
      "Mənim üçün bu universitet həyatımın ən doğru seçimi idi. Mənim üçün bu universitet həyatımın ən doğru seçimi idi.",
    fullName: "Filankes Filankesov",
    work: "Filan şirkətdə Mühəndis",
  },
  {
    src: "../../../src/tools/images/png/graduate__03.png",
    description:
      "Mənim üçün bu universitet həyatımın ən doğru seçimi idi. Mənim üçün bu universitet həyatımın ən doğru seçimi idi.",
    fullName: "Filankes Filankesov",
    work: "Filan şirkətdə Mühəndis",
  },
];
// src = "./images/mezun-fikirleri/mezun-fikir-background.png" alt = "logo" />
mezunFikirData.forEach((data) => {
  mezunFikirleriWrapper.innerHTML += `
        <div class="swiper-slide flex p-9">
          <img class="w-2/4" src="${data.src}" alt="bombee">
          <div class="w-2/4 flex flex-col justify-center px-6">       
            <p class="text-6xl">
                ${data.description}
            </p>
            <p class="text-4xl pt-6 italic">
                ${data.fullName}
            </p>
            <p class="text-4xl italic">
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
});
