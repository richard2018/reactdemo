import React, { Component } from 'react';
export default class ListItem extends Component { 
	static defaultProps = {
		text: '',
		checked: false, 
	}
		render() { 
			return (
				<li>
				<input type="checkbox" checked={this.props.checked}
				onChange={this.props.onChange} /> <span>{this.props.value}</span>
				</li> );
	} 
}