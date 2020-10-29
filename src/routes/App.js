import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../containers/Home'
import BlogsPostDetails from '../containers/BlogPostDetails.jsx'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blogpost' component={BlogsPostDetails} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App
