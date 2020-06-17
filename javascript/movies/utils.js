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
