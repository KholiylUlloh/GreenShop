import React from 'react'
import { AntCarousel, Left, Right, Wrap } from './style'
import BigImg from '../../../assets/images/flower1.png'

const Carousel = () => {
  return (
    <AntCarousel autoplay dots>
      <Wrap>
        <Left>
            <Left.Greeting>Welcome to GreenShop</Left.Greeting>
            <Left.Title>Let’s Make a Better <span>Planet</span></Left.Title>
            <Left.Desc>
              We are an online plant shop offering a wide range of cheap and trendy plants.
              Use our plants to create an unique Urban Jungle. Order your favorite plants!
            </Left.Desc>
            <Left.Bttn>SHOP NOW</Left.Bttn>
        </Left>
        <Right>
          <Right.BigImg src={BigImg} />
        </Right>
      </Wrap>
      <Wrap>
        <Left>
            <Left.Greeting>Welcome to GreenShop</Left.Greeting>
            <Left.Title>Let’s Make a Better <span>Planet</span></Left.Title>
            <Left.Desc>
              We are an online plant shop offering a wide range of cheap and trendy plants.
              Use our plants to create an unique Urban Jungle. Order your favorite plants!
            </Left.Desc>
            <Left.Bttn>SHOP NOW</Left.Bttn>
        </Left>
        <Right>
          <Right.BigImg src={BigImg} />
        </Right>
      </Wrap>
      <Wrap>
        <Left>
            <Left.Greeting>Welcome to GreenShop</Left.Greeting>
            <Left.Title>Let’s Make a Better <span>Planet</span></Left.Title>
            <Left.Desc>
              We are an online plant shop offering a wide range of cheap and trendy plants.
              Use our plants to create an unique Urban Jungle. Order your favorite plants!
            </Left.Desc>
            <Left.Bttn>SHOP NOW</Left.Bttn>
        </Left>
        <Right>
          <Right.BigImg src={BigImg} />
        </Right>
      </Wrap>
      <Wrap>
        <Left>
            <Left.Greeting>Welcome to GreenShop</Left.Greeting>
            <Left.Title>Let’s Make a Better <span>Planet</span></Left.Title>
            <Left.Desc>
              We are an online plant shop offering a wide range of cheap and trendy plants.
              Use our plants to create an unique Urban Jungle. Order your favorite plants!
            </Left.Desc>
            <Left.Bttn>SHOP NOW</Left.Bttn>
        </Left>
        <Right>
          <Right.BigImg src={BigImg} />
        </Right>
      </Wrap>
    </AntCarousel>
  )
}

export default Carousel