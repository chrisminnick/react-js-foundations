import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }; //normally, you'd set this initial value to false
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Oops! There's been an error.</h1>
          
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
