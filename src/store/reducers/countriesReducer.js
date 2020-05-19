import countries from "../../data/countries"
import {SET_COUNTRIES_IMG, SET_COUNTRY_IMAGES} from "../actions/countriesAction";

const randomCountries =[]

for (let i = 0; ; i++) {
    let ind = Math.floor(Math.random() * countries.length);

    if(randomCountries.find(c=> c === countries[ind])) continue
    if(randomCountries.length===10) break
    randomCountries.push(countries[ind]);
}



const localLat =40;
const localLon =45;

const getDistanceFromLatLonInKm =(coords)=>{
    const R = 6371; // Радиус земли
    const degLat = deg2rad(coords.latlng[0]-localLat);
    const degLon = deg2rad(coords.latlng[1]-localLon);
    const a =
        Math.sin(degLat/2) * Math.sin(degLat/2) +
        Math.cos(deg2rad(localLat)) * Math.cos(deg2rad(coords.latlng[0])) *
        Math.sin(degLon/2) * Math.sin(degLon/2)
    ;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c; // Distance in km
    return sortByDistance.push({coords, distance});
};

function deg2rad(deg) {
    return deg * (Math.PI/180)
}

let sortByDistance = [];
randomCountries.forEach(getDistanceFromLatLonInKm);

const res = sortByDistance.sort(function compare(a, b){return a.distance - b.distance});

const initialState={
    countries: [...res.map(r=>r.coords)],
    countryImg: []

};

const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRIES_IMG:
            return {
                ...state,
                countries: state.countries.map((country, index) => {
                         return country.name!==action.payload.country ? country : {...country, img: action.payload.img}
                        })
             };
           case SET_COUNTRY_IMAGES:
            return {
                ...state,
                countryImg: action.payload
             };

        default:
            return state
    }
};


export default countriesReducer;