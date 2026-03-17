import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return (
        <div className="bakery-page-wrap">
          <div className="bakery-main" style={{ paddingTop: '1.5rem' }}>
            <div className="bakery-section">Something went wrong.</div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
