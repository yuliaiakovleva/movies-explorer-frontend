import React from 'react';
import './FilterCheckbox.css'

function FilterCheckbox() {
    return (
        // <input type="checkbox"></input>
        <div className='switch-container'>
            <input type="checkbox" className='switch' id='switch'></input>
            <p className='switch__label'>Короткометражки</p>
        </div>
      );
}

export default FilterCheckbox;