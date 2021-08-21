import React from 'react'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ShopPreview from '../components/shop-preview'

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Seo title="Shop" />
        <Hero title="Shop" />
        <ShopPreview />
      </Layout>
    )
  }
}

export default BlogIndex