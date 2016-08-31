import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import { BodyContainer } from "phenomic"
import Container from "Container"
import Nav from "./Nav"

import styles from "./index.css"

export default class Documentation extends Component {
  render() {
    const {
      head,
      body,
    } = this.props

    return (
      <Container>
        <Helmet
          title={ head.title } />

        <div className={ styles.documentation }>
          <div className={ styles.documentationNav }>
            <Nav />
          </div>
          <div className={ styles.documentationContent }>
            <BodyContainer>
              { body }
            </BodyContainer>
          </div>
        </div>
      </Container>
    )
  }
}