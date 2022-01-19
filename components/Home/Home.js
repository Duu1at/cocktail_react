import React, { useState, useEffect } from 'react';
import './Home.css';
import { GET_ALL_COCKTAILS, SEARCH_COCKTAIL_BY_NAME, FILTER_COCKTAIL_BY_ALCO } from "../../config/config";
import Output from "../Output/Output";
import Form from "../Form/Form";

const Home = () => {

    const [cocktails, setCocktails] = useState([])

    const getAllCocktails = async () => {
        const request = await fetch(GET_ALL_COCKTAILS)
        const response = await request.json()
        setCocktails(response.drinks)
        console.log(response.drinks)

    }

    const searchCocktailByName = async (name) => {
        if (name.length >= 3) {
            const request = await fetch(SEARCH_COCKTAIL_BY_NAME + name)
            const response = await request.json()
            setCocktails(response.drinks)
        } else {
            getAllCocktails()
        }
    }

    const filterCocktails = async (option) => {

        if (option === 'All') {
            getAllCocktails()
        } else {
            const request = await fetch(FILTER_COCKTAIL_BY_ALCO + option)
            const response = await request.json()
            setCocktails(response.drinks)
        }
    }

    useEffect(() => {
        getAllCocktails()

    }, [])

    return (
        <div>
            <Form
                searchCocktailByName={searchCocktailByName}
                filterCocktails={filterCocktails}
            />
            <Output
                cocktails={cocktails}
            />
        </div>
    );
};

export default Home;