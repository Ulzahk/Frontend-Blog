import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../containers/Home'
import BlogsPostDetails from '../containers/BlogPostDetails'
import CreateBlogPost from '../containers/CreateBlogPost'
import ModifyBlogPost from '../containers/ModifyBlogPost'
import NotFound from '../containers/NotFound'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blogpost/:meta_title' component={BlogsPostDetails} />
        <Route exact path='/crear-blogpost' component={CreateBlogPost} />
        <Route exact path='/modificar-blogpost/:meta_title' component={ModifyBlogPost} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App
