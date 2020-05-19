import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {Redirect, Route, Switch} from 'react-router-dom';
import store from './store/store';
import CountriesContainer from './components/Countries/CountriesContainer';
import CountryContainer from "./components/Country/CountryContainer";


const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <Switch>
                    <Route exact path="/" render={() => <CountriesContainer/>}/>
                    <Route path="/:countryId" render={() => <CountryContainer/>}/>
                    <Redirect to={"/"}/>
                </Switch>
            </div>
        </Provider>
    )
};

export default App;
