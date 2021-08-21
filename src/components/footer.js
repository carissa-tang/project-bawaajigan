import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      <a href="https://projectbawaajigan.gtsb.io/">© Copyright 2021 Project Bawaajigan.</a>
    </div>
  </Container>
)

export default Footer
