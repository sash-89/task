export const COUNTRIES_IMG_FETCH_REQUESTED = "COUNTRIES_IMG_FETCH_REQUESTED";
export const COUNTRY_IMAGES_FETCH_REQUESTED = "COUNTRY_IMAGES_FETCH_REQUESTED";

export const SET_COUNTRIES_IMG = "SET_COUNTRIES_IMG";
export const SET_COUNTRY_IMAGES = "SET_COUNTRY_IMAGES";


export const setCountriesImg = (countryImg) =>{
    return ({
    type: SET_COUNTRIES_IMG,
    payload: countryImg
})};

export const setCountryImages = (Img) =>{
    return ({
    type: SET_COUNTRY_IMAGES,
    payload: Img
})};



export const requestCountriesImg = (url) => ({
    type: COUNTRIES_IMG_FETCH_REQUESTED,
    payload: url
});
export const requestCountryImages = (url) => ({
    type: COUNTRY_IMAGES_FETCH_REQUESTED,
    payload: url
});
