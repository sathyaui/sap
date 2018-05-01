import React, { Component } from 'react';
import PropTypes from "prop-types";
import Loader from "react-loader";
import { connect } from "react-redux";
import { fetchMasterData } from "./Redux/actions/master";
import { fetchProductData } from "./Redux/actions/product";
import { fetchDealersData } from "./Redux/actions/dealer";
import App from './App';
import Fade from "./components/common/Animation/fade";
import Menu from "./components/common/MenuPopup";
import Footer from "./components/common/footer";

class Home extends Component {
  componentDidMount() {
    this.props.fetchMasterData();
    this.props.fetchProductData();
    this.props.fetchDealersData();
  }
  render() {
    return (
      <Loader loaded={true}>
        <App location={this.props.location} />
        <Fade visible={this.props.open}><Menu /></Fade>
        <Footer />
      </Loader>
    );
  }
}

Home.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    open:state.toggleMenu.open
  };
}

export default connect(mapStateToProps, {fetchMasterData, fetchProductData, fetchDealersData})(Home);
