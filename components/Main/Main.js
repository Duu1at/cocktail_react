import React from 'react'
import './Main.css'
import{Route,Routes} from 'react-router-dom'
import Detail from '../Detail/Detail'
import Ingredient from '../Ingredient/Ingredient'
import Home from '../Home/Home'



export default function Main() {
    return (
        <Routes>
            <Route exact path={'/'} element={<Home/>}/>
            <Route exact path={'/detail/:id'} element={<Detail/>}/>
            <Route exact path={'/ingredient/:name'} element={<Ingredient/>}/>
            
        </Routes>
    )
}
