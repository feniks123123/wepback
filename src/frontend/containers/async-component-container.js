import React, { Component } from "react";


export default function asyncComponent(importComponent) {
	class AsyncComponent extends Component {
		constructor(props) {
			super(props);
			this.active = true;
			this.state = {
				component: null
			};
		}

		async componentDidMount() {
			const { default: component } = await importComponent();

			if(this.active) {
				this.setState({
					component: component
				});
			}
		}

		componentWillUnmount() {
			this.active = false
		}

		render() {
			const C = this.state.component;

			return C ? <C {...this.props} /> : null;
		}
	}

	return AsyncComponent;
}