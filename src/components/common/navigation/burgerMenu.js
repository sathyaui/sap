import React, {Component} from 'react';
import { connect } from "react-redux";
import { toggleMenu } from "../../../Redux/actions/toggleMenu";

class BurgerIcon extends Component {
	state = {
		open:false
	};
	menuOpenClose = () => {
		this.setState({
			open:!this.state.open
		});
		this.props.toggleMenu(!this.state.open);
	};
	render() {
		return <button className="burgerIcon" onClick={this.menuOpenClose}>
		    <span />
		    <span />
		    <span />
		    <h3>Menu</h3>
		  </button>
	}
  
}

export default connect(null, {toggleMenu})(BurgerIcon);
