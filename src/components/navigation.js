import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <img className={styles.logo} src={"https://i.imgur.com/4Iw1b78.png?1"} alt={"Logo"}/>
      <span className={styles.navigationItem}>Project Bawaajigan</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/about-us/" activeClassName="active">
          About Us
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/articles/" activeClassName="active">
          Articles
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/shop/" activeClassName="active">
          Shop
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
