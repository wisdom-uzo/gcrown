import { Divider } from '@mui/material'
import React from 'react'
import Nav from './Nav'

const Layout = ({children}) => {
  return (
    <div className="bg-gray-900">
        <Nav />
        <Divider sx={{background:'white'}}/>

        <div className="">
            {children}
        </div>
    </div>
  )
}

export default Layout