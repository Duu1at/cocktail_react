import React from 'react';
import './Form.css'
const Form = (props) => {
    return (
        <div className='input'>

            <input
                type="text"
                placeholder='Cocktail Name'
                onChange={(e)=>
                props.searchCocktailByName(e.target.value)
                }
            />

            <select className='select' onChange={(e)=>
            props.filterCocktails(e.target.value)
            }>
                <option value="All">All Drinks</option>
                <option value="Alcoholic">Alcoholic Drinks</option>
                <option value="Non_Alcoholic">Non-Alcoholic</option>
            </select>


        </div>
    );
};

export default Form;