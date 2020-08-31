import React from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

// date picker component
//install npm i react-date-range
function Search() {
  const [startDate, setStartDate] = setState(new Date());
  const [endDate, setEndDate] = setState(new Date());

  const 
  return (
    <div className="search">
      <DateRangePicker />
    </div>
  );
}

export default Search;
