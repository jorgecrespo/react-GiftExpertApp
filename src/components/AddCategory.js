import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        return setInputValue(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('Submit!')
        if (inputValue.trim().length > 2){

            setCategories( cats => [ inputValue.trim(), ...cats] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleOnSubmit}>
        <h1>{ inputValue }</h1>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form >
    )
}


AddCategory.prototype = {

    setCategories : PropTypes.func.isRequired 
}
