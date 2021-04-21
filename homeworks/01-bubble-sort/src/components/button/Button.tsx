import React, {Component} from "react";

type ButtonProps = {
	name: string,
	isDisabled: boolean,
	action: () => void,
}

class Button extends Component<ButtonProps> {
	onClick = () => {
		this.props.action()
	}

	render() {
		const {isDisabled, name} = this.props;
		return (
			<button onClick={this.onClick} disabled={isDisabled}>
				{name}
			</button>
		);
	}
}

export default Button;
