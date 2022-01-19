import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GET_INFO_COCKTAIL_BY_ID } from '../../config/config'
import './Detail.css'

const Detail = () => {

    let params = useParams()

    const [cocktail, setCocktail] = useState()

    const getInfoCocktail = async () => {
        const request = await fetch(GET_INFO_COCKTAIL_BY_ID + params.id)
        const response = await request.json()
        setCocktail(response.drinks[0])

    }

    useEffect(() => {
        getInfoCocktail()
    }, [])

    return (
        <div className='details'>
            <h2>Details of Cocktail</h2>
            <img className='details__img' src={cocktail?.strDrinkThumb} alt="process"></img>
            <h3>{cocktail?.strDrink}</h3>
            <p>{cocktail?.strCategory}</p>
            <p>{cocktail?.strAlcoholic}</p>
            <h2>{cocktail?.strDescription}</h2>
            <div className='link'>
            <Link to={'/ingredient/'+cocktail?.strIngredient1}>{cocktail?.strIngredient1}</Link>
            <Link to={'/ingredient/'+cocktail?.strIngredient2}>{cocktail?.strIngredient2}</Link>
            <Link to={'/ingredient/'+cocktail?.strIngredient3}>{cocktail?.strIngredient3}</Link>
            <Link to={'/ingredient/'+cocktail?.strIngredient4}>{cocktail?.strIngredient4}</Link>
            </div>
          

        </div>
    );
};

export default Detail;