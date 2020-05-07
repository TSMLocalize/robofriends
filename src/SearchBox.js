import React from 'react';

const SearchBox = ({searchChange}) => { //destructuring allows us to grab the props object and grab its properties
    return (       
        <div className='pa2'>
        <input 
            className="pa3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="search robots"
            onChange={searchChange}
            // everytime the onchange event is triggered, call the onSearchChange function
        />
        </div>
    );
}

export default SearchBox;