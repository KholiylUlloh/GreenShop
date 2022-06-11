import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 20px 15px;
background: #FBFBFB;
flex: 1;
`
const Title = styled.div`
font-family: 'Cera Pro med';
font-size: 18px;
line-height: 16px;
color: #3D3D3D;
`
const Wrap = styled.div`
display: flex;
align-self: auto;
align-items: center;
justify-content: space-between;
padding: 7px 15px;
width: 100%;
`
const Category = styled(Link)`
font-family: 'Cera Pro light';
font-size: 17px;
line-height: 40px;
color: #3D3D3D;
`
Category.Count = styled.div`
font-family: 'Cera Pro light';
font-size: 17px;
line-height: 40px;
color: #3D3D3D;
`

export { Container, Title, Wrap, Category }