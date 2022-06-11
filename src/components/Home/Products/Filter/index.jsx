import React from 'react'
import { category } from '../../../../utils/category'
import { Category, Container, Title, Wrap } from './style'

const Filter = () => {
  return (
    <Container>
        <Title>Category</Title>
            {
                category.map(({ id, title, count, path})=>
                <Wrap  key={id}>
                    <Category to={path}>{title}</Category>
                    <Category.Count>({count})</Category.Count>
                </Wrap>
                )
            }
    </Container>
  )
}

export default Filter