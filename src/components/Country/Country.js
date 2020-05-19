import React, {useEffect, useState} from "react";
import style from "./Country.module.css";


const Countries = ({ countryName, countryImg}) => {
    const [toggle, changeToggle]=useState(false)
    const [img, changeImg]=useState(null)

    useEffect(()=>{
        changeImg(countryImg)
    }, [countryImg]);
    
    useEffect(()=>{
        changeToggle(countryImg===img)
    }, [countryImg, img]);

    return (
        <div className={style.Container}>
           { !toggle || !img ? <h1>Loading...</h1> : <div className={style.Country}>
                <h1>Country: <span>{countryName}</span></h1>
                <div className={style.ImgContainer}>
                </div>
                {img.map((c, i) => <img key={i} src={c} alt={"c.name"}/>)}
            </div>}
        </div>
    )
};






export default Countries