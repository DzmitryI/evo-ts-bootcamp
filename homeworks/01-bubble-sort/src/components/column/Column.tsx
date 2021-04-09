import React, {Component} from "react";
import './index.css'

type ColumnProps = {
	size: number
}

class Column extends Component<ColumnProps, {}> {
	render() {
		return (
			<div className='column' style={{height: `${this.props.size *2}px`}}></div>
		);
	}
}

export default Column
