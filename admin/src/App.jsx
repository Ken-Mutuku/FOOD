import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import List from './pages/List/List'
import Order from './pages/Order/Order'
import Add from './pages/Add/Add'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
