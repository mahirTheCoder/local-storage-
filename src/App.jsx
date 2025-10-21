import React from 'react'
import { createRoutesFromElements, Route, RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import Home from './Pages/Home'
const App = () => {
const myroute = createBrowserRouter(createRoutesFromElements(
  <Route index element={<Home/>}/>
))

  return (


    
    <>
    <RouterProvider router={myroute}/>
    
    </>
  )
}

export default App