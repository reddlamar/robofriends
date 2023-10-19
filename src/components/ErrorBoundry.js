import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hassError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hassError: true });
    }

    render() {
        if (this.state.hassError) {
            return <h1>Oooops. This is not good</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundry;