// import React from 'react'
// import Header from './layout/Header'
// import Footer from './layout/Footer'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'

const App = () => {
  return (
    <div className='h-full w-full overflow-hidden'>
    <RouterProvider router={Routes}/>
    </div>
  )
}

export default App  