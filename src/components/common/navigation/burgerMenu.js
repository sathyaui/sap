import React, {Component} from 'react';
import { connect } from "react-redux";
import { toggleMenu } from "../../../Redux/actions/toggleMenu";

class BurgerIcon extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      open:false
	    }
	    this.collapse = this.collapse.bind(this);
	}
	
	componentDidMount() {
    	document.addEventListener('mousedown', this.handleClickOutside);
  	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}
	menuOpenClose = (e) => {	
		this.setState({
			open:!this.state.open
		});
		this.props.toggleMenu(!this.state.open);
	};
	collapse() {
		this.setState({
			open:!this.state.open
		});
		this.props.toggleMenu(!this.state.open);
	}
	render() {
		const {open} = this.state
		return <button onBlur={ this.collapse} className="burgerIcon" onClick={this.menuOpenClose}>
		    <span />
		    <span />
		    <span />
		    <h3>Menu</h3>
		  </button>
	}
  
}

export default connect(null, {toggleMenu})(BurgerIcon);
