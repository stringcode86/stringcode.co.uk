import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        logErrorToMyService(error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>
                Ngl it ain't looking good chief. Maybe try enabling webgl, or
                disabling aggressive privacy protections. Anon cypher punk you.
            </h1>
        }

        return this.props.children
    }
}

export default ErrorBoundary