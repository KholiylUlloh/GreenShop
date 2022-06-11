import React from 'react'
import Body from './Body'
import Filter from './Filter'
import { Container } from './style'

const Products = () => {
  return (
   <Container>
       <Filter />
       <Body />
   </Container>
  )
}

export default Products