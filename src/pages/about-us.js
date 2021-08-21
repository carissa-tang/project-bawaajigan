import React from 'react'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import AboutUs from '../components/about-us'

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Seo title="About Us" />
        <Hero title="About Us" />
        <AboutUs />
      </Layout>
    )
  }
}

export default BlogIndex