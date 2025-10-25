import React, { Component, ErrorInfo, ReactNode } from "react";
import styles from "./ErrorBoundary.module.css";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className={styles.errorContainer}>
          <div className={styles.errorContent}>
            <h2>Oops! Something went wrong</h2>
            <p>We encountered an unexpected error. Please try refreshing the page.</p>
            <details className={styles.errorDetails}>
              <summary>Error details</summary>
              <pre>{this.state.error?.message}</pre>
            </details>
            <div className={styles.actions}>
              <button
                onClick={this.handleRetry}
                className={styles.retryButton}
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.reload()}
                className={styles.reloadButton}
              >
                Reload Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;