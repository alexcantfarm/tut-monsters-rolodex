import React from 'react';
import './search-box.styles.css';

/*
function components doesnt have access to the state object, because
function components doesnt inherit React.Component, like the
class components do
function components also doesnt have access to lifecycle methods

function components are for generationg independent pieces of HTML
with varying props 

if internal state of lifecycle methods are not needed
function components should be used
*/
export const SearchBox = ({placeHolder, handleChange}) => (
    <input className="search" type="search" placeholder={placeHolder} onChange={handleChange}></input>

)