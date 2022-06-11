import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
flex: 3.5;
`

//styles for body navbar
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
`

const NavWrap = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 20rem;
`
const Links = styled(Link)`
font-family: 'Cera Pro light';
font-size: 17px;
line-height: 16px;
color: #3D3D3D;
`
const Sort = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-family: 'Cera Pro light';
font-size: 17px;
line-height: 16px;
color: #3D3D3D;
`


//styles for Body

const CardWrap = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
gap: 20px;
`

const Card = styled.div`
height: 19rem;
border: 1px solid;
background-color: coral;
`

export { Container, Top, NavWrap, Links, Sort, Card, CardWrap, }