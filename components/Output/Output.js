import React from 'react';
import './Output.css'
import { Link } from 'react-router-dom'

const Output = (props) => {
    return (
        <div className='row'>
            {props.cocktails ?
                props.cocktails.map((el) => {
                    return (
                        <div className="col-3">
                            <Link to={
                                '/detail/' + el.idDrink} key={el.idDrink}>
                                <img className='output__img' src={el.strDrinkThumb} alt="processing" />
                                {el.strDrink.length < 25 ?
                                    <h2 className='h2'>{el.strDrink}</h2>
                                    :
                                    <h2 className='h2' >{el.strDrink.slice(0,10)+'...'}</h2>
                                }
                            </Link>
                        </div>
                    )
                })
                :
                <h2>Loading...</h2>
            }
        </div>
    );
};

export default Output;