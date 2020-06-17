const fetchData = async () => {
  const response = await axios.get(' http://www.omdbapi.com/', {
    params: {
      apikey: '6b555dde',
      i: 'tt2975590',
    },
  });
  console.log(response.data);
};

fetchData();
