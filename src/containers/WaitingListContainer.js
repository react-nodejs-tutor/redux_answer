import React, { Component } from 'react';
import WaitingList from '../components/WaitingList';
import { connect } from 'react-redux';
import { changeInput, create, enter, leave } from '../store/modules/waiting';

class WaitingListContainer extends Component {
	handleChange = e => {
		this.props.changeInput(e.target.value);
	};

	handleCreate = e => {
		e.preventDefault();
		this.props.create(this.props.input);
		this.props.changeInput('');
	};

	render() {
		const { input, list, enter, leave } = this.props;
		return (
			<WaitingList
				input={input}
				waitingList={list}
				onEnter={enter}
				onLeave={leave}
				onChange={this.handleChange}
				onCreate={this.handleCreate}
			/>
		);
	}
}

const mapStateToProps = state => ({
	input: state.waiting.input,
	list: state.waiting.list
});

const mapDispatchToProps = {
	changeInput,
	create,
	enter,
	leave
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(WaitingListContainer);
