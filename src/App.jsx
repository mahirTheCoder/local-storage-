import React from 'react'
import { createRoutesFromElements, Route, RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import Login from './Componet/Login'

const App = () => {
const myroute = createBrowserRouter(createRoutesFromElements(
  <Route index element={<Login/>}/>
))

  return (


    
    <>
    <RouterProvider router={myroute}/>
    
    </>
  )
}

export default App