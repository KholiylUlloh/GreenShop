import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { plants } from '../../../../utils/mockdata/plants';
import { Card, CardWrap, Container, Links, NavWrap, Sort, Top } from './style'
import { Select } from 'antd';

const list = [
    { id: 'all', title: 'All Plants' },
    { id: 'new', title: 'New Arrivals' },
    { id: 'sale', title: 'Sale' },
  ];

  //for select
  const { Option } = Select;
  //for select

const Body = () => {
    const [data, setData] = useState([]);
    console.log(data);

//   const { pathname } = useLocation();
//   const { category } = useParams();
  const navigate = useNavigate();

//   useEffect(() => {
//     if (
//       category.replace(':', '') !== 'new' &&
//       category.replace(':', '') !== 'all' &&
//       category.replace(':', '') !== 'sale'
//     ) {
//       let newData = plants.filter(
//         (value) =>
//           value.category.toLocaleLowerCase() ===
//           category.replace(':', '').toLocaleLowerCase()
//       );
//       setData(newData);
//     }
//   }, [pathname]);

  const onRoute = (path) => {
    navigate(`/home/:${path}`);
    if (path === 'all') {
      setData(plants);
    } else {
      let res = plants.filter((value) => value.status === path);
      setData(res);
    }
  };
  console.log(onRoute);
  return (
    <Container>
        <Top>
            <NavWrap>
            {list.map((value) => (
                <Links
                to={value.id}
                // onClick={() => onRoute(value.id)}
                // active={
                //     value.id === category.replace(':', '').toLocaleLowerCase()
                // }
                >
                {value.title}
                </Links>
          ))}
            </NavWrap>
            <Sort>
              Sort by:
            <Select defaultValue="Default sorting" bordered={false} style={{ width: 140 }}>
              <Option value="date">Date</Option>
              <Option value="name">Name</Option>
              <Option value="price">Price</Option>
            </Select>
            </Sort>
        </Top>
        <CardWrap>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </CardWrap>
    </Container>
  )
}

export default Body