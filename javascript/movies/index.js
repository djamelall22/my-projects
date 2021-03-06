// Fetch data from omdbapi API
const fetchData = async (searchTerm) => {
  const response = await axios.get(' http://www.omdbapi.com/', {
    params: {
      apikey: '6b555dde',
      s: searchTerm,
    },
  });
  if (response.data.Error) {
    return [];
  }
  return response.data.Search;
};

//Searching the API on Input Change and delaying search input

const input = document.querySelector('input');

const onInput = async (event) => {
  const movies = await fetchData(event.target.value);
  console.log(movies);
  for (let movie of movies) {
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${movie.Poster}"/>
    <h1>${movie.Title}<h1/>
    `;
    document.querySelector('#target').appendChild(div);
  }
};

input.addEventListener('input', debounce(onInput));
