import React, { useState } from 'react';
import PropTypes from 'prop-types';
const AddCategory = ( {setCategorias}   ) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
       setInputValue(e.target.value);
    } 
    const handleSubmit = (e) => {
        e.preventDefault();
        //para evitar el  refres de todo el navegador como se hacia antes
        console.log('sumbit realizado' );
        if(inputValue.trim().length > 2) {
            setCategorias( cats => [inputValue, ...cats]);
            setInputValue('')
        }
       
    }
  return (
    <>
      <form onSubmit= {handleSubmit}>
      <input type="text" 
              className="form-control" 
              placeholder="Ingresa Tu personaje"
              value={inputValue}
              onChange={handleInputChange}>
              </input>
      </form>
    </>
    )
}
AddCategory.propTypes = {
    setCategorias : PropTypes.func.isRequired
}
export default AddCategory;