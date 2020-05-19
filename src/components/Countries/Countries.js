import React from "react";
import style from "./Countries.module.css";
import {NavLink} from "react-router-dom";


const Countries = ({countries}) => {
const cls = [style.slideRight, style.slideLeft, style.slideBottom, style.slideTop]
    return(
        <div className={style.Container}>
            {countries.map(c=>{
                return(
                    <div key={c.name}
                         className={cls[Math.floor(Math.random() * cls.length)].toString()}>
                    <div className={style.Country}>
                        <p>Country: <span>{c.name}</span></p>
                        <NavLink to={`/${c.name}`}><img src={c.img} alt={c.name} /></NavLink>
                        <p>Capital: <span>{c.capital}</span></p>
                    </div>
                    </div>
                )
            })}
        </div>
    )
};


export default Countries