const searchform = document.getElementById('search-form');
const showmore = document.getElementById('show-more');
const searchbox = document.getElementById('search-box');
const showmoreimg = document.getElementById('show-more-img');

let keyword = "";
const accesskey = "M9nDFdN2HV4aDMe6XeIfcdfyhrzRZo9YUh23AqmeTxQ"
let pages = 1;
async function searchPhotos() {
    keyword = searchbox.value;
    const url = 'https://api.unsplash.com/search/photos?page=${pages}&query=${keyword}&client_id=${accesskey}';

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    const results = data.results;

    results.map(result => {
        const image = document.createElement('img');
        image.src = result.urls.small;
        
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = '_blank';

        imagelink.appendChild(image);
        showmoreimg.appendChild(imagelink);

        })
}
searchform.addEventListener('submit', (e) => {
    e.preventDefault();
    searchPhotos();
});

showmore.addEventListener('click', () => {  
    page++;
    searchPhotos();
});

