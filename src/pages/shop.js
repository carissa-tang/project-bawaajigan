import React from 'react'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Seo title="Shop" />
        <Hero title="Shop" />
      </Layout>
    )
  }
}

export default BlogIndex