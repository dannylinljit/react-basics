import React, { Component, } from 'react';
import '../css/styles.css';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			keywords: '',
		};
	}

	_handleInputChange = (event) => {
		this.setState({
			keywords: event.target.value,
		});
	}

	render() {
		const {
			_handleInputChange,
		} = this;

		return (
			<header>
				<div className='logo'>
					Logo
				</div>

				<input
					type='text'
					onChange={_handleInputChange}
				/>
			</header>
		);
	}
}

export default Header;
