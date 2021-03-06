import React, { Component } from 'react';
import ListItem from './ListItem';
export default class List extends Component { 
	static defaultProps = {
    list: [],
    handleItemChange: () => {},
};
constructor(props) { 
	super(props);
	this.state = {
		list: this.props.list.map(entry => ({
			text: entry.text,
			checked: entry.checked, })),
		}; 
}
onItemChange(entry) {
	// console.warn('entry : ' + JSON.stringify(entry))
	const { list } = this.state;
	this.setState({
		list: list.map(prevEntry => ({
				text: prevEntry.text,
				checked: prevEntry.text === entry.text ? !prevEntry.checked : prevEntry.checked, 
				}
			)),
		});
		
	this.props.handleItemChange(entry,33); 
}
render() { 
	return (
		<div> 
		 <ul>
		 {
			this.state.list.map((entry, index) => ( <ListItem
			key={`list-${index}`}
			value={entry.text}
			checked={entry.checked} onChange={this.onItemChange.bind(this, entry)}
			/> ))
		 }
		 </ul> 
		</div>
		); 
	}
}