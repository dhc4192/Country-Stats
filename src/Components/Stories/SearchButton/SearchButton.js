  
import React from 'react';
import './SearchButton.css'

// This is a functional component - just sent up a little differently as an arrow function!
const SearchButton = (props) => (
    <button className={props.type} onClick={props.onClick}>
        {props.label}
    </button>
)


export default SearchButton;