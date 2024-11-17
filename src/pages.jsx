import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function pages() {
  return (
    <div>
      <Routes>
        <Route path='/'/>
        <Route path='/page' element={<pages/>} />
      </Routes>
    </div>
  )
}
