import React from 'react';

function getFilteredArray(array, valueToSearch, toString){
  return(
    array.filter((data) => {
      return `${toString(data)}`
        .toLowerCase()
        .includes(valueToSearch.toLowerCase());
    })
  );
}

function SearchBar(props){
  return(
    <div className="form-group">
      <label>{props.children}</label>
      <input 
        type="text" 
        className="form-control"
        onChange={(e) => {
          props.setFilteredArray(
            getFilteredArray(
              props.array, 
              e.target.value,
              props.toString
            )
          );
        }}
      />
    </div>
  )
}

export default SearchBar;