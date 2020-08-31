import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID GjsDNUYM2uj6DQGE7nkbTnDS8h8kk5VLkeL6r1MktkE',
  },
});
