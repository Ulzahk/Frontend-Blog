import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../containers/Home'
import BlogsPostDetails from '../containers/BlogPostDetails.jsx'
import NotFound from '../containers/NotFound'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blogpost' component={BlogsPostDetails} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App
