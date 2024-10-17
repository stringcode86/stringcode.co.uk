import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log('[ERROR]', error)
        console.log('[ERROR]', errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <h1>
                Ngl it ain't looking good chief. Maybe try enabling webgl, or
                disabling aggressive privacy protections. You anon cypher punk you.
            </h1>
        }

        return this.props.children
    }
}

export default ErrorBoundary