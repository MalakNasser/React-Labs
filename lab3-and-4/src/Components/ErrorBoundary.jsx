import React, { Component } from "react";
import ErrorPage from "./ErrorPage";

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      error: undefined,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("We caught an error", error, errorInfo);
  }
  render() {
    return (
      <div>{this.state.hasError ? <ErrorPage /> : this.props.children}</div>
    );
  }
}
