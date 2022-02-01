import React from 'react'
import { Route, withRouter } from 'react-router-dom'

const Middleware = ({ component: Component, layout: Layout }) => (
  <Route
    render={props => {
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      )
    }}
  />
)

export default withRouter(Middleware)
