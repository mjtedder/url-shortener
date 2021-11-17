import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getUrl } from '../actions';
import Field from './Field';

const Form = () => {

    const longUrlRef = useRef();
    const dispatch = useDispatch();

    const formStyle = {
        color: 'white'
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(getUrl(longUrlRef.current.value));
        longUrlRef.current.value = '';
    }

    return (
        <form style={formStyle} onSubmit={handleFormSubmit}>
            <Field ref={longUrlRef} label="Paste a link to shorten it" type="text" />
            <input type="submit" value="Shorten" />
        </form>
    )
}

export default Form;