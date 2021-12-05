import { Component } from "react";

class ErrorBoundaryWithDidCatch extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(`error: ${error}`);
    console.log(info);
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

export default ErrorBoundaryWithDidCatch;
