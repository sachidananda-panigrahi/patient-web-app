import React, { Component } from 'react'
import { Typography, Box } from '@mui/material'

const withErrorBoundary = WrappedComponent => {
  class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
      this.state = { error: null }
    }

    static getDerivedStateFromError(error) {
      return { error: error }
    }

    componentDidCatch(error, info) {
      console.error('Error caught in ErrorBoundary:', error, info)
    }

    render() {
      const { error } = this.state
      if (error) {
        return (
          <Box p={2}>
            <Typography color="error" variant="subtitle1">
              Something went wrong!
            </Typography>
            <Typography variant="body1">
              An error occurred: {error.message}
            </Typography>
          </Box>
        )
      } else {
        return <WrappedComponent {...this.props} />
      }
    }
  }

  return ErrorBoundary
}

export default withErrorBoundary
