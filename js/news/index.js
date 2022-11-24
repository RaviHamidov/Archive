const paginationList = document.querySelector('#paginated-list');



newsData.forEach(data => {
    paginationList.innerHTML += `
        <li>
            <h2>${data.title}</h2>
        </li>
    `
});

console.log(newsData[1]);