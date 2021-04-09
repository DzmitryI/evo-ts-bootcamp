import React, {Component} from "react";

type ButtonProps = {
	name: string,
	action: () => void,
}

class Button extends Component<ButtonProps, {}> {

	onClick = () => {
		this.props.action()
	}

	render() {
		return (
			<button onClick={this.onClick}>{this.props.name}</button>
		);
	}
}

export default Button;
