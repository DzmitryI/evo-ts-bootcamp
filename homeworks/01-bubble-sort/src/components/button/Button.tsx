import React, {Component} from "react";

type ButtonProps = {
	name: string,
	isDisabled: boolean,
	action: () => void,
}

class Button extends Component<ButtonProps, {}> {

	onClick = () => {
		this.props.action()
	}

	render() {
		return (
			<button onClick={this.onClick} disabled={this.props.isDisabled}>{this.props.name}</button>
		);
	}
}

export default Button;
