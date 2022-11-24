const newsWrapper = document.querySelector(".news-wrapper");
const announceWrapper = document.querySelector(".announce-wrapper");

const newsLoadMore = document.querySelector('.newsLoadMore');
const announceLoadMore = document.querySelector('.announceLoadMore');

const newsSwiper = document.querySelector('.newsSwiper')
const announceSwiper = document.querySelector('.announceSwiper')

const latestNews = document.getElementById('latestNews')
const latestAnnounces = document.getElementById('latestAnnounces')

latestNews.children[0].style = "background-color:#fff;"
latestNews.addEventListener("click", () => {

    latestNews.classList.add("active");
    latestAnnounces.classList.remove("active");
    showNews();

});

latestAnnounces.addEventListener("click", () => {
    latestNews.children[0].style = ""
    latestAnnounces.classList.add("active");
    latestNews.classList.remove("active");
    showAnnounces();
});


function showNews() {
    newsSwiper.classList.remove('hidden');
    announceSwiper.classList.add('hidden');
}

function showAnnounces() {
    announceSwiper.classList.remove('hidden');
    newsSwiper.classList.add('hidden');
}

showNews();

if (window.screen.width < 768) {
    newsWrapper.classList.remove('swiper-wrapper');
    announceWrapper.classList.remove('swiper-wrapper');

    if (!newsWrapper.classList.contains('hidden')) {

        for (let elem of newsWrapper.children) {
            elem.classList.add('hidden');
        }

        let newsWrapperCount = 0;
        for (let elem of newsWrapper.children) {
            newsWrapperCount++;
            elem.classList.remove('hidden');
            if (newsWrapperCount == 3) break;
        }
    } else {
        for (let elem of announceWrapper.children) {
            elem.classList.add('hidden');
        }

        let announceWrapperCount = 0;
        for (let elem of announceWrapper.children) {
            announceWrapperCount++;
            elem.classList.remove('hidden');
            if (announceWrapperCount == 3) break;
        }
    }


} else {
    var swiper = new Swiper(".newsSwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

}

newsLoadMore.addEventListener('click', (event) => {
    newsLoadMore.classList.add('hidden');
    for (let elem of newsWrapper.children) elem.classList.remove('hidden');
});


announceLoadMore.addEventListener('click', (event) => {
    announceLoadMore.classList.add('hidden');
    for (let elem of announceWrapper.children) elem.classList.remove('hidden');
});
