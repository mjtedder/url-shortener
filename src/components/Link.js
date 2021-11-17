import React from 'react';
import { useSelector } from 'react-redux';

const linkStyle = {
    margin: '10px 0 5px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '15px',
    color: 'white'
};

const Link = () => {
    const url = useSelector(state => state.url);

    return (
        url ?
    <a href={url} style={linkStyle} target="_blank">{url}</a>
    : null
    )
};

export default Link;

