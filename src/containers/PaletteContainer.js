import React, { Component } from 'react';
import Palette from '../components/Palette';
import { changeColor } from '../store/modules/counter';
import { connect } from 'react-redux';

class PaletteContainer extends Component {
	render() {
		const { color, changeColor } = this.props;
		return <Palette selected={color} onSelect={changeColor} />;
	}
}

const mapStateToProps = state => ({
	color: state.counter.color
});

const mapDispatchToProps = { changeColor };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PaletteContainer);
