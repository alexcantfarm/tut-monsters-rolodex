import React from 'react';

export const CardList = props => {
    console.log(props);
    return <div><h1>{props.email} {props.children}</h1></div>;
}