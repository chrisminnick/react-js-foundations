import { Component } from "react";
import logger from "./logger";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    logger.push({ error, info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Oops! There's been an error.</h1>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
          
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
