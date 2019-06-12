import React, { Component } from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increment, decrement } from '../store/modules/counter';

class CounterContainer extends Component {
	render() {
		const { color, number, increment, decrement } = this.props;

		return (
			<Counter
				value={number}
				color={color}
				onIncrement={increment}
				onDecrement={decrement}
			/>
		);
	}
}

const mapStateToProps = ({ counter: { color, number } }) => ({
	color,
	number
});

const mapDispatchToProps = { increment, decrement };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CounterContainer);
