import {takeEvery, call, put, all} from "redux-saga/effects"
import {countriesImageAPI} from "../../api/api";
import {setCountriesImg, setCountryImages} from "../actions/countriesAction";
import {takeLatest} from "@redux-saga/core/effects";
// import {takeEvery, takeLatest, call, put, all} from "@redux-saga/core/effects";

export function* rootSaga (){
    yield all( [countriesImgRequestWatcher(), countryImagesRequestWatcher()])

}
function* countriesImgRequestWatcher (){
    yield takeEvery("COUNTRIES_IMG_FETCH_REQUESTED", countriesImgRequestWorker)

}
function* countriesImgRequestWorker (action){
    try {
        const countryImg = yield call(countriesImageAPI.countriesImg, action.payload);
        yield put(setCountriesImg(countryImg));

    } catch (e) {
        // yield put({type: "BOOKS_FETCH_REQUESTED", message: e.message});
    }
}
function* countryImagesRequestWatcher (){
    yield takeLatest("COUNTRY_IMAGES_FETCH_REQUESTED", countryImagesRequestWorker)

}

function* countryImagesRequestWorker (action){
    try {
        const countryImages = yield call(countriesImageAPI.countryImages, action.payload);
        yield put(setCountryImages(countryImages));

    } catch (e) {
        // yield put({type: "BOOKS_FETCH_REQUESTED", message: e.message});
    }
}