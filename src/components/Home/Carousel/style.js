import { Carousel } from 'antd';
import styled from 'styled-components';

const AntCarousel = styled(Carousel)`
.ant-carousel .slick-dots li.slick-active button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
   .slick-dots li button {
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background: rgba(70, 163, 88, 0.3);
  }
  .slick-dots li.slick-active button {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background:#46A358;
  }
`;

const Wrap = styled.div`
display: flex !important;
align-items: center;
width: 100%;
justify-content: space-between;
padding: 0 3rem;
background: linear-gradient(97.77deg, rgba(245, 245, 245, 0.5) -23.46%, rgba(245, 245, 245, 0.5) 107.51%);
`
//styles for left content
const Left = styled.div`
display: flex;
flex-direction: column;
flex: 1;
align-items: flex-start;
`
Left.Greeting = styled.div`
font-family: 'Cera Pro med';
font-size: 14px;
line-height: 16px;
letter-spacing: 0.1em;
text-transform: uppercase;
color: #3D3D3D;
`
Left.Title = styled.div`
font-family: 'Cera Pro bold';
font-size: 70px;
line-height: 70px;
text-transform: uppercase;
color: #3D3D3D;
margin-top: 7px;
span{
    color: #46A358;
}
`
Left.Desc = styled.div`
font-family: 'Cera Pro light';
font-size: 14px;
line-height: 24px;
color: #727272;
margin-top: 5px;
`
Left.Bttn = styled.button`
background: #46A358;
border-radius: 6px;
font-family: 'Cera Pro med';
font-size: 16px;
line-height: 20px;
text-transform: uppercase;
color: #FFFFFF;
border: none;
margin-top: 45px;
padding: 10px 25px;
cursor: pointer;
:active{transform: scale(1.2);}
transition: all linear .3s;
`

//styles for right content
const Right = styled.div`
flex: 1.5;
display: flex;
justify-content: flex-end;
`
Right.BigImg = styled.img`
`

export { AntCarousel, Wrap, Left, Right }