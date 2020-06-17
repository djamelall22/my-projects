// Fetch data from omdbapi API
const fetchData = async (searchTerm) => {
  const response = await axios.get(' http://www.omdbapi.com/', {
    params: {
      apikey: '6b555dde',
      s: searchTerm,
    },
  });
  console.log(response.data);
};

//Searching the API on Input Change and delaying search input

const input = document.querySelector('input');

const onInput = (event) => fetchData(event.target.value);

input.addEventListener('input', debounce(onInput));
