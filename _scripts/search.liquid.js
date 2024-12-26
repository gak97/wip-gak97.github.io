// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// fetch the search data
fetch('/assets/js/search-data.json')
  .then(response => response.json())
  .then(data => {
    // set the data
    ninja.data = data;
  });
