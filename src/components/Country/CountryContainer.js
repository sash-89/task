import React, {Component} from "react";
import {connect} from "react-redux";
import { requestCountryImages} from "../../store/actions/countriesAction";
import Country from "./Country";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


class CountryContainer extends Component {

    componentDidMount() {
        return this.props.requestCountryImages(this.props.match.params.countryId)
    }

    render() {
        return (
            <div>
                <Country countryName={this.props.match.params.countryId} countryImg={this.props.countryImg}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    countryImg: state.countries.countryImg,
});

export default compose(
    connect(mapStateToProps, {requestCountryImages}),
    withRouter
)(CountryContainer);