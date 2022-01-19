import React, { useState, useEffect } from 'react'
import './Ingredient.css'
import { useParams } from 'react-router-dom'
import { GET_INGREDIENT_BY_NAME } from '../../config/config'


export default function Ingredient() {

    let params__ingredient = useParams()

    const [cocktail, setCocktail] = useState()


    const getInfoIngredient = async () => {
        const req = await fetch(GET_INGREDIENT_BY_NAME + params__ingredient.name)
        const res = await req.json()
        setCocktail(res.ingredients[0])
        console.log(res.ingredients[0])

    }

    useEffect(() => {
        getInfoIngredient()
    }, [])


    return (
        <div className='ingridient'>
            <div className='ingridient__row'>
            <p>{cocktail?.strIngredient}</p>
            {cocktail?.strDescription ?
                <p>{cocktail?.strDescription}</p>
                :
                <h2>There is no descreption</h2>
            }
            </div>
         

        </div>
    )
}
