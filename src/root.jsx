import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Home/navbar/Navbar'
import { navbar } from './utils/navbar'

const Root = () => {
  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          {
            navbar.map(({id, path, Element})=>
              <Route key={id} path={path} element={<Element />} />
            )
          }
        </Route>
      </Routes>
    </div>
  )
}

export default Root