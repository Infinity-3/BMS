import React from 'react'
import Bcreate from './Comp/Bikes/Bcreate'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nav from './Comp/Nav/Nav'
import Footer from './Comp/Foot/Footer'
import CMcreate from './Comp/Man & Comp/CMcreate'
import Comp from './Comp/Man & Comp/Comp'
// import Man from './Comp/Man & Comp/Man'
import Bcard from './Comp/Bikes/Bcard'
import Login from './Comp/Auth/Login'
import Register from './Comp/Auth/Register'
import Home from './Comp/Home'
import './App.css'
import About from './Comp/Contact&About/About'
// import Contus from './Comp/Contact&About/Contus'
// import LR from './Comp/Auth/LR'

const App = () => {

  let router=createBrowserRouter([
    { path:'/home', element:(
      <>
        <Nav/>
        <Home/>
        <Footer/>
      </>
    )},
    { path:'/bcard', element:(
      <>
        <Nav/>
        <Bcard/>
        <Footer/>
      </>
    )},
    // { path:'/contus', element:(
    //   <>
    //     <Nav/>
    //     <Contus/>
    //     <Footer/>
    //   </>
    // )},
    { path:'/about', element:(
      <>
        <Nav/>
        <About/>
        <Footer/>
      </>
    )},
    { path:'/bcreate', element:(
      <>
        {/* <Nav/> */}
        <Bcreate/>
        {/* <Footer/> */}
      </>
    )},
    // { path:'/logre', element:(
    //   <>
    //     <Nav/>
    //     <LR/>
    //     <Footer/>
    //   </>
    // )},
    { path:'/', element:(
      <>
        {/* <Nav/> */}
        <Login/>
        {/* <Footer/> */}
      </>
    )},{ path:'/reg', element:(
      <>
        {/* <Nav/> */}
        <Register/>
        {/* <Footer/> */}
      </>
    )},
    { path:'/cmcreate', element:(
      <>
        {/* <Nav/> */}
        <CMcreate/>
        {/* <Footer/> */}
      </>
    )},
    { path:'/cm', element:(
      <>
        <Nav/>
        <Comp/>
        {/* <Man/> */}
        <Footer/>
      </>
    )}
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
