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

const debounce = (func, delay = 1000) => {
  let timeOutId;
  //the warpper
  return (...args) => {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const onInput = (event) => fetchData(event.target.value);

input.addEventListener('input', debounce(onInput));
