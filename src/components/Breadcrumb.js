import React, { Component } from 'react'
import { StyledBreadcrumb } from './styles/Breadcrumb.styled'

export default class Breadcrumb extends Component {
  render() {
    return (
      <StyledBreadcrumb>
        <img src="./images/arrow.png" alt="" /> <span>Create New Wallet</span>
      </StyledBreadcrumb>
    )
  }
}
