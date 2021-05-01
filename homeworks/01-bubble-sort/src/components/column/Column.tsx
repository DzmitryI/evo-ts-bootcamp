import React from "react";
import './index.css'

type ColumnProps = {
	size: number
}

function Column(props: ColumnProps) {
	return (
		<div className='column' style={{height: `${props.size * 2}px`}}></div>
	);
}

export default Column
