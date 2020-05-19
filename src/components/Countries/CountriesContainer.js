import React, {Component} from "react";
import {connect} from "react-redux";
import Countries from "./Countries";
import {requestCountriesImg} from "../../store/actions/countriesAction";


class CountriesContainer extends Component{
    interval=null;
    componentDidMount() {
        let i = -1;
        this.interval = setInterval(() => {
            i++;
            if (i + 1 === this.props.countries.length) clearInterval(this.interval)
            return this.props.requestCountriesImg(this.props.countries[i].name)
        }, 10)

    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render(){
        return(
            <div>
                <Countries countries={this.props.countries}/>
            </div>
        )
    }
}

const mapStateToProps =(state)=>({
    countries: state.countries.countries
});

export default  connect (mapStateToProps, {requestCountriesImg})(CountriesContainer);