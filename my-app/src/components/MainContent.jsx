import React from 'react'
import HeaderDashboard from './HeaderDashboard'
import InfoDashboard from './InfoDashboard'
import ListDashboard from './listDashboard'

const MainContent = () => {
  return (
    <div className='w-full'>
        <HeaderDashboard />
        <InfoDashboard/>
        <ListDashboard />
    </div>
  )
}

export default MainContent